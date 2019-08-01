import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AppLoading, Asset} from 'expo';
import Navigation from './navigation';

import {theme} from './constants';
import {Block} from './component';

//import all used images
const images =[
  require('./assets/foto/icon/arrow-left.png'),
  require('./assets/foto/garden/plants3.png'),
  require('./assets/foto/garden/plants.png'),
  require('./assets/foto/garden/plant2.png'),
  require('./assets/foto/garden/seed2.png'),
  require('./assets/foto/garden/dirt.png'),
  require('./assets/foto/garden/pots.png'),
  require('./assets/foto/garden/spray.png'),
  require('./assets/foto/assets/person.jpg'),
];
export default class App extends React.Component {
  state ={
    isLoadingComplete:false,
  }
  handleReasourceAsync = async ()=>{
    const cacheImages = images.map(img =>{
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
  render(){
    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen)
      {
        return (
          <View>
          <AppLoading
            startAsync={this.handleResourcesAsync}
            onError={error => console.warn(error)}
            onFinish={() => this.setState({ isLoadingComplete: true })}
            /></View>
        )
      }
        return (
          <View>
          <Block white>
            <Navigation />
          </Block></View>
        );
        }
      }

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
