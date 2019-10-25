const path = require('path'),
	ManifestPlugin = require('webpack-manifest-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: {
		'htdocs/js/app': path.resolve(__dirname, 'src', 'app.js'),
		'htdocs/css/main': path.resolve(__dirname, 'scss', 'main.scss'),
	},
	output: {
		path: __dirname,
		filename: '[name].[contenthash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								'targets': {
									'browsers': ['last 2 versions', 'ie 10', 'safari >= 7']
								}
							}],
							'@babel/preset-react'
						]
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: false,
							url: false
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions:{includePath: ['node_modules/']},
							sourceMap: false
						}
					}
				]
			}
		]
	},
	performance: {
		maxEntrypointSize: 1024 * 1024 * 2,
		maxAssetSize: 1024 * 1024 * 2
	},
	plugins:[
		new ManifestPlugin({fileName:'./manifest.json'}),
		new MiniCssExtractPlugin({filename: '[name].css'})
	],
	devtool:'inline-source-map'
}
