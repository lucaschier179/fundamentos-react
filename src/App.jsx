import React from "react"



export default function App(props) {
    return (
        <div id='app'>
        <Fragmento/>
        
        <ComParametro 
            titulo="Nota do Aluno"
            aluno="Lucas"  
            nota={9.7}/>
        <Primeiro></Primeiro>
    </div>,
    )
}