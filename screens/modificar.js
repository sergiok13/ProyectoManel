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
  }
  componentWillMount() {
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
    //this.state.Fetch();
    //this.state.Modificar();
    this.state = {
      nom: "",
      descripcion: "",
      id: this.props.navigation.state.params.id,
      documentJSON: undefined
    };
  }

  componentWillMount(){
    this.obtenerInfo();
  }

  obtenerInfo() {
    fetch("http://localhost:3000/elements/" + this.state.id)
      .then((resposta) => {
        if (resposta.ok) {
          return resposta.json();
        } else {
          console.log("Error al conectar")
        }
      })
      .then(respostaJson => {
        this.setState({ documentJSON: respostaJson});
        this.setState({descripcion: this.state.documentJSON.descripcio});
        this.setState({nom: this.state.documentJSON.nom});
      })
      .catch(error => {
        console.log(error);
      });
  }

  Modificar() {
    fetch('http://localhost:3000/elements/' + this.state.id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom:this.state.nom,
        descripcio:this.state.descripcion
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
  /*Modificar(){
    this.setState({ Nombre: nom });
    this.setState({ Descripcion: descripcio });
  }*/

  render() {
    if (this.state.documentJSON != undefined) {
      return (
        <View>
          {/*<Item nom="usuario1"></Item>*/}
          <TextInput value={this.state.nom} onChangeText={value => this.setState({nom:value})}/>
          <TextInput value={this.state.descripcion} onChangeText={value => this.setState({descripcion:value})}/>
          <Button title="Modificar" onPress={() => this.Modificar()} />
        </View>
      );
    }
    else{
      return(
        <View>
          <Text>Cargando...</Text>
        </View>
      );
    }
  }
};
export default Modificar;