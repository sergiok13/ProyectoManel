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
            email: '',
            password: '',
        }
    }

    handleEmail = (text) => {
        this.setState({ email: text })
     }

     handlePassword = (text) => {
        this.setState({ password: text })
     }

    render(){
        return(

            <View>

                <Text>Correo Usuario</Text>
                <TextInput
                placeholder = "Correo"
                onChangeText = {this.handleEmail}
                />

                <Text>Contraseña</Text>
                <TextInput
                placeholder = "Contraseña"
                onChangeText = {this.handlePassword}
                />

                <Button
                    title="Iniciar sesión"
                    onPress={() => Alert.alert('Te vas a la pagina principal')}
                    color="rgba(16,110,242,1)"
                />

                <Button
                    title="Crear cuenta"
                    onPress={() => Alert.alert('Te vas al formulario crear cuenta')}
                    color="rgb(16, 33, 117)"
                />
            </View>
        )

    }
  }