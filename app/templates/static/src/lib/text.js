import uiText, {registerDefaultText} from '@pubcore/ui-text'
import S from '@pubcore/state'
import defaultTexts from '../resources/text'

export default (key, defaultText, replacements) =>
	uiText(S('T'), key, defaultText, replacements, {
		envType: S('envType'),
		defaultTexts,
		registerDefaultText: registerDefaultText({
			uri: S('resources.services.kdfs.text.register.uri')
		})
	})