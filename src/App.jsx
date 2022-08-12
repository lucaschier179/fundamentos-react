import React from "react"

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default () => (
    <div id="app">
        <h1>Fundamentos React (Arrow _)</h1>
        <Aleatorio min={1} max={100} />
        <Fragmento/>
        <ComParametro
            titulo="Nota do Aluno"
            aluno="Lucas Marcelo"  
            nota={9.7}
        />
        <Primeiro></Primeiro>
    </div>
);