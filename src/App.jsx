import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default function App(props) {
    return (
        <div id='app'>
        <Fragmento />
        <ComParametro 
            titulo="Nota do Aluno"
            aluno="Lucas"  
            nota={9.7}
        />
        <Primeiro></Primeiro>
    </div>,
    )
}