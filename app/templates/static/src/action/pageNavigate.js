import {updateUriAction} from '@pubcore/redux-browser-history'

export default ({page, query, replace}) => dispatch => {
	dispatch(updateUriAction({subPath:'/' + page, query, replace}))
}
