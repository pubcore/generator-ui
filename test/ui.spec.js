var helpers = require('yeoman-test')
var path = require('path')
var assert = require('yeoman-assert')

describe('ui generator', () => {
	it('generate a ui package scaffolding', () =>
		helpers.run(path.join(__dirname, '../app'))
			.withPrompts({ name:'my-project', description:'a test project' }).then(() => {
				assert.file([
					'htdocs/img/favicon.ico', 'package.json', '.gitignore'
				])
				assert.fileContent('package.json', /my-project/)
			})
	)
})
