import { View, Text, Button, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function NumeroGordo(){
    const DEFAULT = 100
    const [dimensao, setDimensao] = useState(DEFAULT)
    const inflar = () => {
        setDimensao(dimensao + 10)
    }
    return (
        <View>
            <Text style={[styles.container, {fontSize:dimensao, width:dimensao, height:dimensao}]}>
                64
            </Text>
            <Button onPress={inflar} title={'Inflar'}></Button>
            <Button onPress={() => setDimensao(DEFAULT)} title={'RESTAR'}></Button>
            <Text>tamanho atual: {dimensao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    }
})