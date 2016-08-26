import React, { Component } from 'react';
import {Text, View, AppRegistry, Navigator} from 'react-native';

import DailySetScene from './app/views/DailySetScene';
import ExceciseScene from './app/views/ExceciseScene';

export default class gymApp extends Component {

  renderScene (route, navigator) {
    switch (route.name) {
      case 'Main':
        return <ExceciseScene navigator={navigator} />;
      case 'DailySet':
        return <DailySetScene navigator={navigator} />;
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
