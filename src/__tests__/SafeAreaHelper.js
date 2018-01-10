// @flow
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import SafeAreaHelper from '../SafeAreaHelper'


describe('SafeAreaHelper', () => {
	it('renders correctly', () => {
		const tree = renderer.create(
			<SafeAreaHelper />,
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
