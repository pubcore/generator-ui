const {join} = require('path'),
	ManifestPlugin = require('webpack-manifest-plugin'),
	{ CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: {
		'app': join(__dirname, 'src', 'app.js')
	},
	output: {
		path: join(__dirname, 'htdocs', 'js'),
		filename: `[name]_${require('./package.json').version.replace(/\./g, '-')}.js`
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
			}
		]
	},
	plugins:[
		new ManifestPlugin({
			fileName:join(__dirname, 'js', 'lib', 'manifest.json'),
			publicPath:'js/'
		}),
		new CleanWebpackPlugin()
	],
	devtool:'inline-source-map'
}
