import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import LogoUFJF from '@/components/logo';
import CaixaTexto from '@/components/caixa-texto';
import Rodape from '@/components/rodape';

export default function TrabalhoScreen() {
  const [dataAtual, setDataAtual] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDataAtual(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LogoUFJF />

      <CaixaTexto />

      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>
          Desenvolvimento para Dispositivos Móveis
        </Text>

        <Text style={styles.subtitulo}>
          Thomas Chapman
        </Text>

        <Text style={styles.matricula}>
          202476030
        </Text>
      </View>
        <Rodape dataAtual = {dataAtual.toLocaleString('pt-BR')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a1219',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  infoContainer: {
    marginTop: 30,
    alignItems: 'center',
  },

  titulo: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },

  subtitulo: {
    color: '#f0f0f0',
    fontSize: 17,
    marginBottom: 6,
  },

  matricula: {
    color: '#d6d6d6',
    fontSize: 16,
    letterSpacing: 1,
  },

});