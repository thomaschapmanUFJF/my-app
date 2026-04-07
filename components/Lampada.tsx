import { View, Text, StyleSheet } from 'react-native';

export default function Lampada({ ligado }: { ligado: boolean }) {
    return (
        <View>
            {ligado ? 
                <Text style={style.texto_aceso}>Aceso</Text> : 
                <Text style={style.texto_apagado}>Apagado</Text>
            }
        </View>
    )
}

const style = StyleSheet.create({
    texto_aceso: {
        backgroundColor: 'yellow',
        color: 'black',
    },
    texto_apagado: {
        backgroundColor: 'black',
        color: 'white',
    }
})