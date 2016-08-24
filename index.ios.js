import React, { Component } from 'react';
import {Text, View, AppRegistry, Navigator} from 'react-native';
import ExceciseScene from './app/views/ExceciseScene';

export default class gymApp extends Component {

  renderScene (route, navigator) {
    if (route.name === 'Main') {
      console.log('Go')
      return <ExceciseScene />;
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'Main' }}
        renderScene={ this.renderScene }
      />
    )
  }
}


AppRegistry.registerComponent('gymApp', () => gymApp);
