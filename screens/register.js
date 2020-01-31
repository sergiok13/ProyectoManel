import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//import Constants from 'expo-constants';
import 'react-native-gesture-handler';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';


export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: undefined,
      username: undefined,
      contra: undefined,
      contraRepite: undefined,
      id: 3,
      permitir: false,
    }
  }
  CompruebaLleno() {
    if (this.state.nombre != undefined && this.state.username != undefined && this.state.contra != undefined) {
      this.setState({ permitir: true });
      this.setState({ id: 3 });

    }
    if ((this.state.contra === this.state.contraRepite)) {
      if ((this.state.permitir == true)) {
        this.InsertoAlumnos();
      }
    }

  }
  InsertoAlumnos = () => {
    fetch('http://localhost:3000/usuaris', {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        userName: this.state.username,
        contrasenya: this.state.contra,
        nom: this.state.nombre,
      }),
    })
    .then(response => {
      console.log(response);
      //response.json();
    })
    .then(json => console.log(json))
    .catch(error => console.log(error));
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 / 6, alignItems: 'center' }}>
          <Text>
            Registro de Usuario
          </Text>
          <Text>
            Será necesario completar todos los campos
          </Text>
        </View>
        <View style={{ flex: 3 / 6 }}>
          <TextInput style={{ borderWidth: 2, margin: 9 }} placeholder=" Introduce tu Nombre" backgroundColor="gray" onChangeText={value => this.setState({ nombre: value })}></TextInput>
          <TextInput style={{ borderWidth: 2, margin: 9 }} placeholder="Introduce tu UserName" backgroundColor="gray" onChangeText={value => this.setState({ username: value })}></TextInput>
          <TextInput style={{ borderWidth: 2, margin: 9 }} placeholder="Introduce tu Contraseña" backgroundColor="gray" onChangeText={value => this.setState({ contra: value })}></TextInput>
          <TextInput style={{ borderWidth: 2, margin: 9 }} placeholder="Repite tu Contraseña" backgroundColor="gray" onChangeText={value => this.setState({ contraRepite: value })}></TextInput>
        </View>
        <View style={{ flex: 2 / 6 }}>
          <TouchableOpacity style={{ paddingTop: 30 }} onPress={() => { this.CompruebaLleno() }}>
            <Text style={{ backgroundColor: "#7A10D8", height: 30 }}>Registrar</Text>
          </TouchableOpacity>
          <Text>
            {this.state.nombre}
          </Text>
          <Text>
            {this.state.correo}
          </Text>
          <Text>
            {this.state.contra}
          </Text>


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
