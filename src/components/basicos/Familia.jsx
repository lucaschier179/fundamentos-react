import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {

    return (
        <div>
            <FamiliaMembro nome="Lucas Marcelo" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Ana Julia" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Terceiro Filho" sobrenome={props.sobrenome}/>
        </div>
    )
}