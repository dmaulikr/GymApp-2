import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class ExceciseScene extends Component {


  render() {
    return (
      <View>
        <Text>Exercise scene page.</Text>
        <TouchableHighlight onPress={ () => this._navigate() }>
          <Text>Go to DailySet Scene</Text>
        </TouchableHighlight>
      </View>
    )
  }

  _navigate(){
    this.props.navigator.push({
      name: 'DailySet', // Matches route.name
    })
  }

}
