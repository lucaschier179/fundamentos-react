import React from "react";

export default props => {
    const cb = props.quandoClicar
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('Lucas', 18, true)}>
                Fornecer Informações
            </button>
        </div>
    )
}