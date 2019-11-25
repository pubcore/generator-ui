import React from 'react'
import T from '../lib/text'

export default function Application(){
	document.title = T('html_document_title')
	return 0||
<h1>{T('headline', 'Welcome!')}</h1>
}
