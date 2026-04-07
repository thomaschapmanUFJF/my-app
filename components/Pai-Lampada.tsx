import { useState } from 'react';
import { View, Button, Text} from 'react-native'
import Lampada from './Lampada'

export default function Interruptor(){
    const [ligado, setLigado] = useState(false)
    return(
    <View>
        <Button title={"aperte"} onPress={() => setLigado(!ligado)}></Button>
        <Lampada ligado={ligado}></Lampada>
    </View>
    )
}