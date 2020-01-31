import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Alert,
} from 'react-native';

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            userName: '',
            contrasenya: '',
            documentJSON: [], //se guardan los usuarios de la bbdd recuperados
        };
        
    }

    //GUARDA CONTRASEÑA Y COMPRUEBA QUE SEA MAYOR QUE 1 Y SI NO ES MAYOR QUE 1 LO DEJA EN BLANCO
     guardarPassword = (text) => {
        (text.length > 1)
            ? this.setState({ contrasenya: text })
            : this.setState({ contrasenya: "" })
    }
    //GUARDA USUARIO Y COMPRUEBA QUE SEA MAYOR QUE 1 Y SI NO ES MAYOR QUE 1 LO DEJA EN BLANCO
    guardarUsuario=(text)=>{
        (text.length > 1)
            ? this.setState({ userName: user })
            : this.setState( { userName: "" })
    }

    
    //Recupera usuarios que coincidan con las variables pasadas por parámetros  
    comprobarUsuario = async () => {
        fetch('http://localhost:3000/usuaris?userName=${this.state.userName}&contrasenya=${this.state.contrasenya}') 
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          console.log("Error en la conexion con http://localhost:3000/usuaris/")
          alert("Error en la conexion con http://localhost:3000/usuaris/")
        }
      })
      .then(respostaJson => {
        this.setState({ documentJSON: respostaJson })
      })
      .catch(error => {
        console.log("Error de conexion: " + error);
        
      })

    }

    // CAMBIA A LA PANTALLA DE INICIO
    pantallaInicio = () => {
      this.props.navigation.navigate('Inicio');
    }
    // CAMBIA A LA PANTALLA DE REGISTRO
    pantallaRegistro = () => {
        this.props.navigation.navigate('Register');
    }

    render(){
        return(

            <View>

                <Text>Nombre Usuario</Text>
                <TextInput
                style={{ borderWidth: 1 }}
                placeholder = "Usuario"
                onChangeText = {this.guardarUsuario}
                keyboardType='email-address'
                />

                <Text>Contraseña</Text>
                <TextInput
                style={{ borderWidth: 1 }}
                placeholder = "Contraseña"
                onChangeText = {this.guardarPassword}
                />

                <Button
                    title="Iniciar sesión"
                    onPress={this.comprobarUsuario}
                    onPress={this.pantallaInicio}
                    color="rgba(16,110,242,1)"
                />

                <Button
                    title="Crear cuenta"
                    onPress={this.pantallaRegistro}
                    color="rgb(16, 33, 117)"
                />
            </View>
        )

    }
  }