
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,Alert,ScrollView } from 'react-native';
//import Constants from 'expo-constants';
import 'react-native-gesture-handler';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

//Creamos la clase principal de registro a la que accederemos para poder registrar
export default class Register extends React.Component {
  //constructor que declara los states que se encargaran de almacenar dentro de ellas el texto que introducimos dentro del textinput
  constructor(props) {
    super(props);
    this.state = {
      nombre: undefined,
      username: undefined,
      contra: undefined,
      contraRepite: undefined,
      permitir: false,
    }
  }
  //funcion que se encarga de comprobar que todos los datos han sido introducidos correctamente
  CompruebaLleno() {
    if (this.state.nombre != undefined && this.state.username != undefined && this.state.contra != undefined) {
      //cambiamos el estado de la variable permitir a true, esto permitirá poder acceder a la funcion que realizar el POST en el JSON
      this.setState({ permitir: true });
    }
    else{
      Alert.alert('Tienes que completar todos los campos');
    }
    //comprobamos que el campo de la contraseña es igual que el de repetir contraseña para poder validar la propia
    if ((this.state.contra === this.state.contraRepite)) {
      //aquí comprobamos que todos los campos han sido seleccionados con el bool que cambiará en caso de que eso suceda 
      if ((this.state.permitir == true)) {
        //Aquí llamamos a la propia funcion con la que vamos a hacer el post en el fichero JSON
        this.InsertoAlumnos();
      }
    }
  }

  //Propio metodo POST en el que haremos un insert dentro del propio fichero de JSON
  InsertoAlumnos = () => {
    fetch('http://localhost:3000/usuaris', {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      //Introducimos los campos que queremos introducir 
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

 //creamos el render que son los elementos que vamos a mostrar en pantalla
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 3 / 6, alignItems: 'center' }}>
          <Text>
            Registro de Usuario
          </Text>
          <TouchableOpacity style={{ paddingTop: 30 }} onPress={() => { this.CompruebaLleno() }}>
            <Text style={{ backgroundColor: "#1BCFD2", height: 30, width: 300,textAlign: 'center'}}>Registrar</Text>
          </TouchableOpacity>
          <Text>
            Será necesario completar todos los campos
          </Text>
        </View>
        <View style={{ flex: 3 / 6 }}>
          <TextInput style={{ borderWidth: 2, margin: 9 }} placeholder=" Introduce tu Nombre" backgroundColor="white" onChangeText={value => this.setState({ nombre: value })}></TextInput>
          <TextInput style={{ borderWidth: 2, margin: 9 }} placeholder="Introduce tu UserName" backgroundColor="white" onChangeText={value => this.setState({ username: value })}></TextInput>
          <TextInput secureTextEntry={true} style={{ borderWidth: 2, margin: 9 }} placeholder="Introduce tu Contraseña" backgroundColor="white" onChangeText={value => this.setState({ contra: value })}></TextInput>
          <TextInput secureTextEntry={true} style={{ borderWidth: 2, margin: 9 }} placeholder="Repite tu Contraseña" backgroundColor="white" onChangeText={value => this.setState({ contraRepite: value })}></TextInput>
        </View>
        <View style={{ flex: 2 / 6 }}>
          <Text>
            Proyecto Manel
          </Text>
          <Text>
            Equipo: Sergio_T,Sergio_Q,Gloria_S,Carlos_T
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
