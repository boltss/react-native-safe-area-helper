// @flow

import {
	type LayoutRectangle,
	Dimensions,
} from 'react-native'

import { type SafeAreaInsets } from '../SafeAreaHelper'


export function getInsetFromSafeAreaLayout({
	x: leftInset,
	y: topInset,
	width: viewWidth,
	height: viewHeight,
}: LayoutRectangle): SafeAreaInsets {
	const {
		width: screenWidth,
		height: screenHeight,
	} = Dimensions.get('window')

	const bottomInset = screenHeight - viewHeight - topInset
	const rightInset = screenWidth - viewWidth - leftInset

	return {
		top: topInset,
		bottom: bottomInset,
		left: leftInset,
		right: rightInset,
	}
}

export default {}
