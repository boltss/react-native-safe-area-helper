// @flow

import {
	type LayoutRectangle,
} from 'react-native'

import { type SafeAreaInsets } from '../SafeAreaHelper'


export function getInsetFromSafeAreaLayout(innerLayout: LayoutRectangle): SafeAreaInsets {
	// TODO: once react-native supports proper safearea for android,
	// then this condition can be removed https://github.com/facebook/react-native/issues/17371
	return {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	}
}

export default {}
