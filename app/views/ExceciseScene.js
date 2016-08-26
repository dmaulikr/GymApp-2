import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class ExceciseScene extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>This are your Exercises for {this.props.day}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    marginTop: 50,
  },
});
