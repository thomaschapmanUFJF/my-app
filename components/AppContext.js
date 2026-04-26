import { createContext, useState } from 'react'
export const AppContext = createContext()

export default function AppProvider({children}){
    const [ativado, setAtivado] = useState(false)
    return (
        <AppContext.Provider value={{ativado,setAtivado}}>
            {children}
        </AppContext.Provider>
    )
}