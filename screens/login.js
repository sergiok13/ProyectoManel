import React, { Component } from 'react';
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
            usuarioCorrecto: false
        };
         //Esto es necesario para poder usar las funciones.
         this.comprueboUsuario = this.comprueboUsuario.bind(this);
         this.usuarioCorrecto = this.usuarioCorrecto.bind(this);
         this.cambioAInicio =  this.cambioAInicio.bind(this);
    }

     guardarPassword = (text) => {
        (text.length > 1)
            ? this.setState({ contrasenya: text })
            : this.setState({ contrasenya: "" })
    }

    guardarUsuario=(text)=>{
        (text.length > 1)
            ? this.setState({ userName: user })
            : this.setState( { userName: "" })
    }

    
    //Recupera SOLO los usuarios que coincidan con las variables pasadas por parámetros  
    comprobarUsuario = async () => {
        fetch(`http://localhost:3000/usuaris?userName=${this.state.userName}&contrasenya=${this.state.contrasenya}`) 
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
        
      });

      this.usuarioCorrecto();
      this.cambioAInicio();
    }

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
                onChangeText = {this.}
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