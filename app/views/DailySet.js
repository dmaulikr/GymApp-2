import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class DailySet extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight style={styles.buttons} onPress={ () => this._navigate() }>
          <Text>{this.props.day}</Text>
        </TouchableHighlight>
      </View>
    )
  }

  _navigate(){
    this.props.navigator.push({
      name: 'ExceciseScene', // Matches route.name
      passProps: {
        day: this.props.day
      }
    })
  }
}

export default class WeeklySet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Pick your Daily Set </Text>
        <DailySet day='Monday' navigator={this.props.navigator} />
        <DailySet day='Tuesday' navigator={this.props.navigator} />
        <DailySet day='Wednesday' navigator={this.props.navigator} />
        <DailySet day='Thursday' navigator={this.props.navigator} />
        <DailySet day='Friday' navigator={this.props.navigator} />
        <DailySet day='Saturday' navigator={this.props.navigator} />
        <DailySet day='Sunday' navigator={this.props.navigator} />
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
  buttons: {
    borderColor: '#000033',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 5,
    width: 100,
    alignItems:'center',
  },
});
