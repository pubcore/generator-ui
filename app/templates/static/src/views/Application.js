import React from 'react'
import uiText from 'pubcore-ui-text'
import S from 'pubcore-state'

class Application extends React.Component {
	render() {
		var T = S('T')
		document.title = uiText(T, 'html_document_title')
		return <h1>Welcome!</h1>
	}
}

export default Application
