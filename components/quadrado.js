import { View, Button, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
let cont = 0;

export default function Quadrado(){
    const cores = ['green','pink','orange', 'red', 'black', 'blue', 'purple']
    const [cor, setCor] = useState(cores[0])
    const alternar = () => {
        {
            setCor(cores[cont%cores.length])
            cont++
        }
    }
    return (
        <View>
            <View style={[styles.caixa, {backgroundColor: cor}]}></View>
            <Button onPress={alternar} title={cor.toString()}></Button>
            <Text>{cont}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    caixa: { width: 100, height: 100 },
})