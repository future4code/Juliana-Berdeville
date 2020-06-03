import React from 'react';
import styled from 'styled-components'


function Secao1() {
  return (
    <div>
        <h1>Dados Gerais</h1>
        <input type="text" placeholder="Nome"></input>
        <input type="text" placeholder="Idade"></input>
        <input type="text" placeholder="E-mail"></input>
        <select>
            <optgroup label='Escolaridade'>
                <option value='EMIncompleto'>E.M. Incompleto</option>
                <option value='EMCompleto'>E.M. Completo</option>
                <option value='ESIncompleto'>E.S. Incompleto</option>
                <option value='ESCompleto'>E.S. Completo</option>
            </optgroup>
        </select>
    </div>
  );
}

export default Secao1;
