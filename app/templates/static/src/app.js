import '@babel/polyfill'
import root from 'window-or-global'
import React from 'react'

import {createStore, applyMiddleware, compose} from 'redux'
import {render} from 'react-dom'

import rootReducer from './reducer/rootReducer'
import initAction from './action/appInit'
import thunkMiddleware from 'redux-thunk'
import {setStore} from '@pubcore/state'
import {listenUri} from '@pubcore/redux-browser-history'
import Application from './views/Application'

var {component} = root.appResources
const composeEnhancers = root.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	rootReducer(),
	{
		T:component.text || {},
		resources:{}
	},
	composeEnhancers(
		applyMiddleware(thunkMiddleware)
	)
)

setStore(store)

store.subscribe(() => {
	render(
		<Application />,
		document.getElementById('application')
	)
})

store.dispatch(initAction)
listenUri(store.dispatch)
