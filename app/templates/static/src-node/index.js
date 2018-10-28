import getHtml from './lib/getHtml'

export default {
	http: [
		{
			routePath: '/',
			map: getHtml,
			method: 'GET',
			accepted: ['text/html']
		}
	]
}
