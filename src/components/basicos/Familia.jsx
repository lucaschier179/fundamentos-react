import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {

    return (
        <div>
            <FamiliaMembro nome="Lucas Marcelo" sobrenome="Schier"/>
            <FamiliaMembro nome="Ana Julia" sobrenome="Schier"/>
            <FamiliaMembro nome="Filho 3" sobrenome="Schier"/>
        </div>
    )
}