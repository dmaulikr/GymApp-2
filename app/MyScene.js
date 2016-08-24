import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MyScene extends Component {
  static propTypes = {
    title: React.PropTypes.string,
  };
  static defaultProps = {
    title: 'MyScene',
  };

  render() {
    return (
      <View>
        <Text>
          iOS Page
        </Text>
      </View>
    )
  }
}
