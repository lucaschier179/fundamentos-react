import React from "react";
import '../repeticao/TabelaProdutos.css'
import produtos from "../../data/produtos";

export default (props) => {

    function getLinhas(){
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>                        
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{'R$ '}{produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }
        return (
            <div className="TabelaProdutos">
                <table border={0}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Produto</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }