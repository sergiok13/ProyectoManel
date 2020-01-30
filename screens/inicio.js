import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Añado esta linea
import 'react-native-gesture-handler';

class Item extends React.Component {
    constructor(porps) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>{this.props.nombre}</Text>
                <Text>Descripcion</Text>
            </View>
        );
    }

}

class Inicio extends React.Component {
    render() {
        return (
            <View>
                <Item nombre="f"></Item>
            </View>
        );
    }
};

const styles = StyleSheet.create({

});

export default Inicio;