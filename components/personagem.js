import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

class Personagem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: {},
      usuario: "",
    };
    this.fetchDados = this.fetchDados.bind(this);
  }

  fetchDados() {
    fetch(`https://rickandmortyapi.com/api/character/1${this.state.usuario}`)
      .then((response) => response.json())
      .then((json) => this.setState({ dados: json }))
      .catch((err) => this.setState({ dados: { err } }));
  }

  componentDidMount() {
    this.fetchDados();
  }

  render() {
    
      const {name, status, species} = this.state.dados;
      return (
      <View style={estilos.container}>
        <Text style={estilos.font30}>Dados do Usuario</Text>
        <Text>Nome: {name}</Text>
        <Text>Status: {status}</Text>
        <Text>Species: {species}</Text>
        <View>
          <TextInput
            style={estilos.input}
            onChangeText={(usuario) => {
              this.setState({ usuario });
            }}
            value={this.state.usuario}
          ></TextInput>
        </View>
        <View>
          <Button
            onPress={this.fetchDados}
            title="Buscar Dados"
            accessibilityLabel="Busque os dados do personagem do Rick and Morty"
          />
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  font30: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    padding: 8,
    width: 250,
    marginTop: 10,
  },
});

export default Personagem;
        