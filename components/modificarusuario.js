import 'react-native-gesture-handler';

class modificarusuario extends Component {

    constructor(props) {
        super(props);
        this.state.Modificar();
        this.state.Modificar1();
        this.state = {
            Usuario: "",
            Contra: "",
            Nombre: "",
        };
      }

    Fetch() {
        fetch('localhost', {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            username = document.getElementById("prod"),
            contrasenya = document.getElementById("shelf"),
            nom = document.getElementById("shelf"),
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

    Modificar(){
        this.setState({ Usuario: userName });
        this.setState({ Contra: contrasenya });
        this.setState({ Nombre: nom });
    }

    render() {
        this.Fetch();
        <button onClick={() => this.Modificar()}>Modificar</button>;
    }
  }