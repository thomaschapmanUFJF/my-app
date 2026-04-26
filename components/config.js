import { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AppContext } from './AppContext'

export default function Config(){
    const { ativado, setAtivado } = useContext(AppContext)
    return (
        <View>
            <Text>Exibir detalhes</Text>
            <Button
            title={ativado ? '✔️' : '✖️'}
            onPress={() => { setAtivado(ativado ? false : true)}}/>
        </View>

    )
}