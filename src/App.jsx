import React from "react"

import Card from "./components/layout/Card";
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default () => (
    <div id="app">
        <h1>Fundamentos React (Arrow _)</h1>

        <Card titulo="#04 - Desafio Aleatório">
            <Aleatorio min={1} max={100} />
        </Card>

        <Card titulo="#03 - Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro">
            <ComParametro
                titulo="Nota do Aluno"
                aluno="Lucas Marcelo"  
                nota={9.7}
            />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
    </div>
);