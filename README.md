# react-native-safe-area-helper

[![Build Status](https://travis-ci.org/boltss/react-native-safe-area-helper.svg?branch=master)](https://travis-ci.org/boltss/react-native-safe-area-helper)
[![Coverage Status](https://coveralls.io/repos/github/boltss/react-native-safe-area-helper/badge.svg?branch=master)](https://coveralls.io/github/boltss/react-native-safe-area-helper?branch=master)

## Introduction
This is a simple component that lets you know what the insets/paddings for safe area are.

## Installation
```bash
npm install react-native-safe-area-helper --save
```

## Usage (with optional flow types)
```js
import SafeAreaHelper, { type SafeAreaInsets } from 'react-native-safe-area-helper'

class App extends Component {
    onInsetsChange = (insets: SafeAreaInsets) => {
        console.log(insets) // { top: 44, bottom: 20, left: 22, right: 0, }
    }

    render() {
        <View>
            ...
            // It tries to fill the whole screen with absolute transparent view
            <SafeAreaHelper onInsetsChange={this.onInsetsChange}
        </View>
    }
}
```
