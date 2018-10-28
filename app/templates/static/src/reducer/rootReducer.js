import {combineReducers} from 'redux'
import uri from '@pubcore/redux-browser-history'

export default () => combineReducers({
	T:s => s||{},
	uri,
	resources:s =>s||{}
})
