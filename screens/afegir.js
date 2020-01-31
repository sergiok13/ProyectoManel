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
  componentWillMount(){
    this.Fetch();
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

class Modificar extends React.Component {

  constructor(props) {
    super(props);
    this.state.Fetch();
    this.state.Afegir();
    this.state = {
        Nom: "",
        Descripcion: "",
    };
  }

  Fetch() {
    fetch('localhost', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       Nombre:document.getElementById(nom),
        Descripcion:document.getElementById(descripcio),
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
  Afegir(){
    this.setState({ Nombre: nom });
    this.setState({ Descripcion: descripcio });
  }

  render() {
      return (
          <View>
              <Item nom="usuario1"></Item>
              <button onClick={() => this.Afegir()}>Afegir</button>;
          </View>
      );
  }
};
  export default Afegir;