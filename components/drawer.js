import { createDrawerNavigator } from '@react-navigation/drawer'
import { Text, View } from 'react-native'


const TelaAPI = () => {
    return <View><Text>TELA API</Text></View>
}

const TelaConfig = () => {
    return <View><Text>TELA CONFIG</Text></View>
}

export default function Menus(){
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen
            name="telaAPI"
            component={TelaAPI}/>
            <Drawer.Screen
            name="telaConfig"
            component={TelaConfig}/>
        </Drawer.Navigator>
    )
}