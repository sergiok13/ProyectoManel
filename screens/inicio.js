import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    FlatList,
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
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={{ display: "flex", float: "right", flexDirection: "row" }}>
                    <View>
                        <Text>{this.props.nombre}</Text>
                    </View>
                    <View>
                        <Button title="ELIMINAR" />
                    </View>
                </View>
                <View style={{ display: "flex", float: "right", flexDirection: "row" }}>
                    <Text>{this.props.descripcion}</Text>
                    <Button title="MODIFICAR" />
                </View>
            </View>
        );
    }

}

class Inicio extends React.Component {
    constructor(props){
        super(props);
        this.state = {documentJSON:undefined};
    }
    
    render() {
        var obtenerElementos = () => {
            fetch('localhost')
                .then((resposta) => {
                    if (resposta.ok) {
                        return resposta.json();
                    } else {
                        console.log("Error al conectar")
                    }
                })
                .then(respostaJson => {
                    this.setState({ documentJSON: respostaJson })
                })
                .catch(error => {
                    console.log(error);
                });
        }

        if(this.state.documentJSON == undefined){
            return (
                <View>
                    <Text>Benvingut</Text>
                    <FlatList
                        data={{
                            "usuaris": [
                              {
                                "idUsu": 1,
                                "userName": "mviel",
                                "contrasenya": "hola",
                                "nom": "Manel"
                              },
                              {
                                "idUsu": 2,
                                "userName": "jofrna",
                                "contrasenya": "hola",
                                "nom": "Jonh"
                              }
                              
                            ],
                            "elements": [
                              {
                                "id":1,
                                "nom": "Coca-Cola",
                                "descripcio": "Beguda Refrescant"
                              },
                              {
                                "id":2,
                                "nom": "Fritos",
                                "descripcio": "Snack"
                              },
                              {
                                "id":3,
                                "nom": "Arròs",
                                "descripcio": "Aliment bàsic"
                              },
                              {
                                "id":4,
                                "nom": "Fruïta",
                                "descripcio": "Imprescindible a la dieta Mediterrània"
                              },
                              {
                                "id":5,
                                "nom": "Llet",
                                "descripcio": "Pot ser Sencera, Semidesnatada o Desnatada"
                              },
                              {
                                "id":6,
                                "nom": "Pa",
                                "descripcio": "Del Forn!!!"
                              }
                            ]
                          }}
                          renderItem={({ item }) => <Item nombre={item.elements.nom} descripcion={item.elements.descripcio}/>}
                    />
                    <Button title="AÑADIR" />
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

const styles = StyleSheet.create({

});

export default Inicio;