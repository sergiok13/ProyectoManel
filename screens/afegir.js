import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput
} from 'react-native';

import 'react-native-gesture-handler';
//import { TextInput } from 'react-native-gesture-handler';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //nom: this.props.nom,
      //descripcio: this.state.descrip,
    }
  }
  componentWillMount() {
    //this.props.funcAfegir();
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

class Afegir extends React.Component {

  constructor(props) {
    super(props);
    //this.state.Fetch();
    //this.state.Afegir();
    this.state = {
      //Nom: "",
      //Descripcion: "",
    };
  }

  Fetch() {
    fetch('http://localhost:3000/elements', {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        contrasenya: this.state.contra,
        nom: this.state.nombre,
      }),
    })
      .then(response => {
        console.log(response);
        //response.json();
      })
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }

  Afegir() {
    //this.setState({ Nombre: nom });
    //this.setState({ Descripcion: descripcio });
  }

  render() {
    return (
      <View>
        <Item nom="usuario1" ></Item>
        <Button title="Afegir" onPress={() => this.Afegir()}/>
      </View>
    );
  }
};
export default Afegir;