import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import Quadrado from '../../components/quadrado';
import numero from '../../components/numero';
import React from 'react';
import NumeroGordo from '../../components/numero';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Testando Componente Quadrado</Text>
        <Text style={styles.subtitle}>O quadrado deve mudar de cor ao apertar o botão:</Text>
        <View style={styles.testArea}>
          <Quadrado />
        </View>
        
        <Text style={styles.note}>
          Cores esperadas: Verde → Rosa → Laranja → Verde...
        </Text>
        <Text style={styles.title}>Testando Inflar</Text>
        <Text style={styles.subtitle}>O numero deve aumentar ao apertar o botão:</Text>
         <View style={styles.testArea}>
          <NumeroGordo />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666',
    textAlign: 'center',
  },
  testArea: {
    marginVertical: 20,
    alignItems: 'center',
  },
  note: {
    marginTop: 40,
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
});