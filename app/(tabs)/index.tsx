import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';


export default function App() {
  const [contador, setContador] = useState(0)
  const cores = ["red", "green", "blue", "orange"];
  const norm = (n: number) => {
    return n % cores.length;
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <View style={[styles.square, { backgroundColor: cores[norm(contador)] }]} />
        <View style={[styles.square, { backgroundColor: cores[norm(contador + 1)] }]} />
        <View style={[styles.square, { backgroundColor: cores[norm(contador + 2)] }]} />
        <View style={[styles.square, { backgroundColor: cores[norm(contador + 3)] }]} />
      </View>
      <Button onPress={() => contador} title={"Mudar"}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
    backgroundColor: "#fff",
  },
  grid: {
    width: 160,
    height: 160,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  square: {
    width: 75,
    height: 75,
  },
  buttonContainer: {
    marginTop: 20,
  },
});