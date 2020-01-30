import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Alert,
} from 'react-native';

export default class Register extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        nombre: undefined,
        username: undefined,
        contra: undefined,
        id: 1,
        permitir: false,
      }
    }
    CompruebaLleno(){
      if(this.state.texto!=undefined && this.state.texto2!=undefined && this.state.texto3!=undefined){
        this.setState({permitir: true})
        this.setState({id: 1})
      }
      if((this.state.permitir==true)){
        
      }
    }
    insertoAlumnos=()=>{
          fetch('http://localhost:3000/alumnes', {
          method: 'POST',
          body: JSON.stringify({
              nom: this.state.nombre,
              curs: this.state.curso
      }),
          headers: {
          "Content-type": "application/json; charset=UTF-8"
          }
      })
          .then(response => response.json())
          .then(json => console.log(json))
      }
  
   
    render() {
      return (
        <View style={styles.container}>
          <View style={{flex: 1/6, alignItems: 'center'}}>
            <Text>
              Creacion de registro 
            </Text>
            <Text>
              Será necesario completar todos los campos
            </Text>
          </View>
        <View style={{flex: 2/6}}>
            <TextInput style={{borderWidth: 2, margin: 9}} placeholder=" Introduce tu Nombre" backgroundColor="gray" onChangeText = {value => this.setState({nombre: value})}></TextInput>
            <TextInput style={{borderWidth: 2, margin: 9}} placeholder="Introduce tu UserName" backgroundColor="gray" onChangeText = {value => this.setState({correo: value})}></TextInput>
            <TextInput style={{borderWidth: 2, margin: 9}} placeholder="Introduce tu Contraseña" backgroundColor="gray" onChangeText = {value => this.setState({contra: value})}></TextInput>
            <TextInput style={{borderWidth: 2, margin: 9}} placeholder="Repite tu Contraseña" backgroundColor="gray"></TextInput>
        </View>
          <View style={{flex: 2/6}}>
            <TouchableOpacity style={{paddingTop: 30}} onPress={ () => {this.CompruebaLleno()}}>
            <Text style={{backgroundColor: "#7A10D8", height:30}}>Registrar</Text>
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
  