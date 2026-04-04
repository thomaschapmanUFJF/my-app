import { TextInput, StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';

export default function CaixaTexto() {
    const [variavelDeEstado, setVariavelDeEstado] = useState('');

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Digite sua matrícula"
                placeholderTextColor="#999"
                value={variavelDeEstado}
                onChangeText={setVariavelDeEstado}
                style={styles.caixaPesquisa}
            />

            {variavelDeEstado !== '' && (
                <Text style={styles.texto}>
                    Sua matrícula é: {variavelDeEstado}
                </Text>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },

  caixaPesquisa: {
    width: '85%',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,

    fontSize: 16,
    color: '#333',

    borderWidth: 1,
    borderColor: '#e5e5e5',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },

    elevation: 3,
  },

  texto: {
    marginTop: 12,
    fontSize: 16,
    color: 'white',
    fontWeight: '500'
  }
});