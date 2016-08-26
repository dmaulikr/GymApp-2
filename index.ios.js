import React, { Component } from 'react';
import {Text, View, AppRegistry, Navigator} from 'react-native';

//import DailySetScene from './app/views/DailySetScene';
import ExceciseScene from './app/views/ExceciseScene';
import WeeklySet from './app/views/DailySet';

export default class gymApp extends Component {

  renderScene (route, navigator) {
    switch (route.name) {
      case 'ExceciseScene':
        return <ExceciseScene navigator={navigator} {...route.passProps} />;
      case 'WeeklySet':
        return <WeeklySet navigator={navigator} {...route.passProps} />;
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'WeeklySet' }}
        renderScene={ this.renderScene }
      />
    )
  }
}


AppRegistry.registerComponent('gymApp', () => gymApp);
