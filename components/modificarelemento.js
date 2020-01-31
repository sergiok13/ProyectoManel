import 'react-native-gesture-handler';

class modificarusuario extends Component {

    constructor(props) {
        super(props);
        this.state.Fetch();
        this.state.Modificar1();
        this.state = {
            id1:6,
            nomb: "",
            desc: ""
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
            id = document.getElementById("prod"),
            nom = document.getElementById("shelf"),
            descripcio = document.getElementById("shelf"),
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
        this.setState({ id1: id });
        this.setState({ nomb: nom });
        this.setState({ desc: descripcio});
    }

    render() {
        this.Fetch();
        <button onClick={() => this.Modificar()}>Modificar</button>;
    }
  }