'use strict'
const getHtml = require('./lib/getHtml')

exports.default = {
	http: [
		{
			routePath: '/',
			map: getHtml,
			method: 'GET',
			accepted: ['text/html']
		}
	]
}
