import React from 'react'
import './CardEducacao.css'

function CardEducacao(props) {
    return (
        <div className="Educacao-container">
            <img src={ props.imagem } />
             <div>
                <h4>{ props.titulo }</h4>
                <p className="Nome-IES">{ props.ies }</p>
                <p>{ props.texto}</p>
            </div>        
        </div>
    )
}

export default CardEducacao;