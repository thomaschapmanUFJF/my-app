import { View, Text, StyleSheet } from 'react-native';

export default function Rodape({ dataAtual }) {
  return (
    <View style={styles.container}>
      <Text style={styles.data}>
        {dataAtual}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },

  data: {
    color: '#ffffff',
    fontSize: 16,
    opacity: 0.8,
  }
});