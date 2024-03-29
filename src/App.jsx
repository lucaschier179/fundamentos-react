import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import Mega from "./components/mega/Mega";
import Contador  from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#13 Mega" color="#7800FF">
                <Mega qtde={8}/>
            </Card>

            <Card titulo="#12 Contador" color="#FF550D">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 Componente Controlado (Input)" color="#FFAF00">
                <Input></Input>
            </Card>

            <Card titulo="#10 Comunicação Indireta" color="#04E000">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 Comunicação Direta" color="#E03F63">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 Renderização Condicional" color="#28B0E0">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Lucas'}}/>
                {/*<UsuarioInfo usuario={{}}/>*/}
            </Card>

            <Card titulo="#07 Desafio - Tabela de Produtos" color="#991200">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#C25D13">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#3C0080">
                <Familia sobrenome="Schier">
                    <FamiliaMembro nome="Lucas Marcelo" />
                    <FamiliaMembro nome="Ana Julia" />
                    <FamiliaMembro nome="Terceiro Filho" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#005B07">
                <Aleatorio min={1} max={100} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#00275B">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#5B0700">
                <ComParametro titulo="Nota do Aluno" aluno="Lucas Marcelo" nota={9.7} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#C28A00">
                <Primeiro>  </Primeiro>
            </Card>

        </div>
    </div>
);
