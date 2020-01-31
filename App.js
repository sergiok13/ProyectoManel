/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Añado esta linea
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Inicio from './screens/inicio';

import Login from './screens/login';
import Register from './screens/register';
import Modificar from './screens/modificar';

export const NavegadorDeLaApp = createStackNavigator(
  {
    Login:{screen:Login},
    Register:{screen:Register},
    Inicio:{screen:Inicio},
    //Afegir:{screen:Afegir},
    Modificar:{screen:Modificar},
  },
  {initialRouteName:'Login'},
);

export const AppContainer = createAppContainer(NavegadorDeLaApp);
class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    );
  }
};

const styles = StyleSheet.create({
  
});

export default App;
