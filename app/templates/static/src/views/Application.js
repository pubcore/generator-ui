import React from 'react'
import uiText from 'pubcore-ui-text'
import S from '@pubcore/state'

export default function Application(){
	var T = S('T')
	document.title = uiText(T, 'html_document_title')
	return 0||
<h1>Welcome!</h1>
}
