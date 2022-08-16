import React from "react";

export default props => {
    const cb = props.quandoClicar
    const min = 1
    const max = 150
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('Lucas', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}