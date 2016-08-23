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
      <View style={styles.container}>
        <Text style={styles.welcome}>
          <Text>Hi! My name is {this.props.title}.</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
