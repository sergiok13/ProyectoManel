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
            correo: '',
            password: '',
            resultadoFetch: []
        }
    }

    validar_email = (email) => {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test(email)) {
            this.setState({ correo: email });
            console.log("correo valido")
        } else {
            this.setState({ correo: "" })
            console.log("error");
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

                <Text>Correo Usuario</Text>
                <TextInput
                style={{ borderWidth: 1 }}
                placeholder = "Correo"
                onChangeText = {this.validar_email}
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