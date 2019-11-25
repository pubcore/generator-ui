const path = require('path'),
	ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
	entry: {
		'htdocs/js/app': path.resolve(__dirname, 'src', 'app.js')
	},
	output: {
		path: __dirname,
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
	performance: {
		maxEntrypointSize: 1024 * 1024 * 2,
		maxAssetSize: 1024 * 1024 * 2
	},
	plugins:[
		new ManifestPlugin({fileName:'./manifest.json'})
	],
	devtool:'inline-source-map'
}
