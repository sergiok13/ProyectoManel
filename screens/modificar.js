import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';

class Item extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
          <View>
              <TextInput value="nom" placeholder="Escriba aquí el nombre"></TextInput>
              <TextInput value="descripcio" placeholder="Escriba aquí la descripción"></TextInput>
          </View>
      );
  }

}
UNSAFE_componentWillMount(
  this.Fetch()
)
class Modificar extends React.Component {

  constructor(props) {
    super(props);
    this.state.Fetch();
    this.state.Modificar();
    this.state = {
        Nom: "",
        Descripcion: "",
    };
  }

  Fetch() {
    fetch('localhost', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       Nombre = document.getElementById(nom),
        Descripcion = document.getElementById(descripcio),
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
         alert(responseJson)
      })
      .catch((error) => {
       console.error(error)
      })
  }
  Modificar(){
    this.setState({ Nombre: nom });
    this.setState({ Descripcion: descripcio });
  }

  render() {
      return (
          <View>
              <Item nom="usuario1"></Item>
              <button onClick={() => this.Modificar()}>Modificar</button>;
          </View>
      );
  }
};

  export default Modificar;