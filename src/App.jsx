import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#05 - Componente com Filhos" color="#8900C2">
                <Familia></Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#005B07">
                <Aleatorio min={1} max={100} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#00275B">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#5B0700">
                <ComParametro
                    titulo="Nota do Aluno"
                    aluno="Lucas Marcelo"  
                    nota={9.7}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#C28A00">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);