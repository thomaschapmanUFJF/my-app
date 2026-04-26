import { createDrawerNavigator } from '@react-navigation/drawer'
import Config from './config.js'
import Personagem from './personagem.js'


const Drawer = createDrawerNavigator()

const TelaAPI = () => {return <Personagem/>}
const TelaConfig = () => {return <Config />}
export default function Menus(){

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