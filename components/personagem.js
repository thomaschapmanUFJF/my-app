import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Personagem(){
  const [state, setState] = useState({
      dados: {},
      usuario: "1"
    })
  const fetchDados = () => {
    fetch(`https://rickandmortyapi.com/api/character/${state.usuario}`)
      .then((response) => response.json())
      .then((json) => setState({ dados: json }))
      .catch((err) => setState({ dados: { err } }));
  }
  const {name, status, species} = state.dados;
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
              setState(prevState => ({ ...prevState, usuario }));
            }}
            value={state.usuario}
          ></TextInput>
        </View>
        <View>
          <Button
            onPress={fetchDados}
            title="Buscar Dados"
            accessibilityLabel="Busque os dados do personagem do Rick and Morty"
          />
        </View>
      </View>
    );
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
        