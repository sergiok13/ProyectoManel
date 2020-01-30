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
            password: '',
            resultadoFetch: []
        }
    }

     guardarPassword = (text) => {
        (text.length > 1)
            ? this.setState({ password: text })
            : this.setState({ password: "" })
    }

    

    comprobarUsuario = async () => {
        await this.iniciarSesion();
        (this.state.resultadoFetch.length !== 0) ? this.props.navigation.navigate('Inicio') : alert("El correo o la contraseña no son correctos");;
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
                onChangeText = {this.validar_usuario}
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