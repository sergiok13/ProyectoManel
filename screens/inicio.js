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

class Separador extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={{ height: 2 }}>
                </View>
                <View style={{ backgroundColor: "black", height: 2 }}>
                </View>
                <View style={{ height: 2 }}>
                </View>
            </View>
        );
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {



        return (
            <View style={{ borderColor: "blue", borderWidth: 2, borderRadius: 20 }}>
                <View style={{ flex: 1, float: "right", flexDirection: "row", marginHorizontal: 20, marginTop: 10, marginBottom: 5 }}>
                    <View style={{ flex: 0.7 }}>
                        <Text>{this.props.nombre}</Text>
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <Button title="ELIMINAR" onPress={() => this.props.borrar()} />
                    </View>
                </View>
                <View style={{ flex: 1, float: "right", flexDirection: "row", marginHorizontal: 20, marginBottom: 10 }}>
                    <View style={{ flex: 0.7 }}>
                        <Text>{this.props.descripcion}</Text>
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <Button title="MODIFICAR" onPress={() => this.props.funcion()} />
                    </View>
                </View>
            </View>
        );
    }

}

class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { documentJSON: undefined };
    }

    obtenerElementos() {
        fetch("http://localhost:3000/elements")
            .then((resposta) => {
                if (resposta.ok) {
                    return resposta.json();
                } else {
                    console.log("Error al conectar")
                }
            })
            .then(respostaJson => {
                this.setState({ documentJSON: respostaJson });
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentWillMount() {
        this.obtenerElementos();
    }

    aModificar() {
        this.props.navigation.navigate('Modificar');
    }

    borrarElemento = id => {
        fetch(`http://localhost:3000/elements/` + id,
            { method: "DELETE" })
            .then(response =>
                response.json().then(json => {
                    alert("Se ha borrado " + json);
                })
            );
        this.obtenerElementos();
    }

    render() {


        if (this.state.documentJSON != undefined) {
            return (
                <View style={{ flex: 100 }}>
                    <View style={{ flex: 5 }}>
                    </View>

                    <View style={{ flex: 5, marginLeft: 30 }}>
                        <Text>Benvingut {this.props.navigation.state.params.nombre}</Text>
                    </View>
                    <View style={{ flex: 75 }}>
                        <FlatList
                            ItemSeparatorComponent={() => <Separador />}
                            /*data={[
                                {
                                    "id": 1,
                                    "nom": "Coca-Cola",
                                    "descripcio": "Beguda Refrescant"
                                },
                                {
                                    "id": 2,
                                    "nom": "Fritos",
                                    "descripcio": "Snack"
                                },
                                {
                                    "id": 3,
                                    "nom": "Arròs",
                                    "descripcio": "Aliment bàsic"
                                },
                                {
                                    "id": 4,
                                    "nom": "Fruïta",
                                    "descripcio": "Imprescindible a la dieta Mediterrània"
                                },
                                {
                                    "id": 5,
                                    "nom": "Llet",
                                    "descripcio": "Pot ser Sencera, Semidesnatada o Desnatada"
                                },
                                {
                                    "id": 6,
                                    "nom": "Pa",
                                    "descripcio": "Del Forn!!!"
                                }
                            ]}*/
                            data={this.state.documentJSON}
                            renderItem={({ item }) => <Item borrar={() => this.borrarElemento(item.id)} nombre={item.nom} descripcion={item.descripcio} funcion={() => this.aModificar()} />}
                        />
                    </View>

                    <View style={{ flex: 5 }}>
                    </View>

                    <View style={{ flex: 10, flexDirection: "row" }}>
                        <View style={{ flex: 2 / 3 }}></View>
                        <View style={{ flex: 1 / 3 }}>
                            <Button title="AÑADIR" onPress={() => this.props.navigation.navigate("Afegir")}/>
                        </View>
                    </View>
                </View>
            );
        }
        else {
            return (
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