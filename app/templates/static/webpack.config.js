const path = require('path'),
	ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
	entry: {
		'htdocs/js/app': path.resolve(__dirname, 'src', 'app.js')
	},
	output: {
		path: __dirname,
		filename: '[name].[contenthash].js'
	},
	resolve: {
		alias: {
			views: path.resolve(__dirname, 'src/views/'),
			lib: path.resolve(__dirname, 'src/lib/'),
			action: path.resolve(__dirname, 'src/action/'),
			reducer: path.resolve(__dirname, 'src/reducer/'),
			carrier: path.resolve(__dirname, 'src/carrier/'),
			props: path.resolve(__dirname, 'src/props/'),
			gofer: path.resolve(__dirname, 'src/gofer/')
		}
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
	performance: {
		maxEntrypointSize: 1024 * 1024 * 2,
		maxAssetSize: 1024 * 1024 * 2
	},
	plugins:[new ManifestPlugin({fileName:'./js/manifest.json'})],
	devtool:'eval-source-map'
}
