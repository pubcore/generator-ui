var Generator = require('yeoman-generator'),
	updateNotifier = require('update-notifier'),
	pkg = require('../package.json'),
	{basename, resolve} = require('path')

updateNotifier({pkg}).notify()

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts)
	}
	async prompting() {
		this.answers = await this.prompt([{
			type    : 'input',
			name    : 'name',
			message : 'Your project name',
			default : `@${basename(resolve(process.cwd(), '..'))}/${this.appname.replace(/\s+/g, '-')}`
		},{
			type: 'input',
			name: 'description',
			message: 'package description',
		}])
		this.log('package name', this.answers.name)
		this.log('package description', this.answers.description)
	}
	writing(){
		this.fs.copy(
			this.templatePath('static/**/*'),
			this.destinationPath('.'),
			{globOptions:{dot:true}}
		)
		this.fs.copy(
			this.templatePath('_gitignore'),
			this.destinationPath('.gitignore')
		)
		this.fs.copyTpl(
			this.templatePath('package-json'),
			this.destinationPath('./package.json'),
			{
				name:this.answers.name,
				description: this.answers.description
			}
		)
	}
	install(){
		this.log('Install packages ...')
		this.npmInstall([
			'@babel/cli', '@babel/core', 'babel-loader',
			'@babel/plugin-proposal-object-rest-spread', '@babel/preset-env',
			'@babel/preset-react', '@babel/runtime',
			'eslint', 'eslint-plugin-react', 'webpack',
			'webpack-cli', 'webpack-manifest-plugin', 'webpack-node-externals',
			'clean-webpack-plugin'
		], {'save-dev': true })

		this.npmInstall([
			'@pubcore/redux-browser-history', '@pubcore/http-client', '@babel/polyfill',
			'@pubcore/state', '@pubcore/ui-text', 'qs', 'react', 'react-dom', 'redux',
			'redux-create-reducer', 'redux-thunk', 'window-or-global'
		], {save:true})
		this.npmInstall()
	}
	end(){
		this.spawnCommandSync('git', ['init'])
		this.spawnCommandSync('git', ['add', '.'])
		this.spawnCommandSync('git', ['commit', '-m "init"'])
	}
}
