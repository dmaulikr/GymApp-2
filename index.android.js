/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Text, View} from 'react-native';

export default class gymApp extends Component {
  render() {
    return (
      <Text>Android is not supported.</Text>
    )
  }
}


AppRegistry.registerComponent('gymApp', () => gymApp);
