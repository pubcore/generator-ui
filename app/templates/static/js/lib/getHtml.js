'use strict'
const manifest = require('../../manifest.json')
var appJs = manifest['htdocs/js/app.js'].replace(/^[^/]+/, '')

module.exports = (req, res) => {
	var {component, baseUrl, user, locale, resources} = req
	res.send(`<!DOCTYPE html>
<html lang="${locale||'en-US'}">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="css/main.css" type="text/css">
</head>
<body>
	<div id="application"></div>
	<script>window.appResources = ${JSON.stringify({
		user,
		component,
		context_path:baseUrl,
		resources
	})}</script>
	<script src="${baseUrl+appJs}" type="text/javascript"></script>
</body>
</html>
`)}
