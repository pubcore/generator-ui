import {updateUriAction} from '@pubcore/redux-browser-history'

export default (page, query) => dispatch => {
	dispatch(updateUriAction({subPath:'/' + page, query}))
}
