// @flow
import React, { PureComponent } from 'react'
import {
	SafeAreaView,
	View,
	StyleSheet,
	type LayoutChangeEvent,
	Dimensions,
	Platform,
} from 'react-native'

import { getInsetFromSafeAreaLayout } from './util/SafeAreaUtil'


export type SafeAreaInsets = {
	top: number,
	bottom: number,
	left: number,
	right: number,
}
type Props = {
	onInsetsChange: (insets: SafeAreaInsets) => void,
}

const styles = StyleSheet.create({
	safeArea: {
		...StyleSheet.absoluteFillObject,
	},
	insideSafeArea: {
		flex: 1,
	},
})

export default class SafeAreaHelper extends PureComponent<Props> {
	onInsideSafeAreaLayout = (event: LayoutChangeEvent) => {
		const { onInsetsChange } = this.props

		const insets = getInsetFromSafeAreaLayout(event.nativeEvent.layout)
		onInsetsChange(insets)
	}

	props: Props

	render() {
		return (
			<SafeAreaView style={styles.safeArea} pointerEvents='none'>
				<View
					style={styles.insideSafeArea}
					onLayout={this.onInsideSafeAreaLayout}
				/>
			</SafeAreaView>
		)
	}
}
