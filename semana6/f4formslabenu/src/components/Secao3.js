import React from 'react';
import styled from 'styled-components'

function Secao3() {
  return (
    <div>
        <h1>Informações gerais de ensino</h1>
        <input type="text" placeholder="Motivo de não-conclusão do curso"></input>
        <select>
            <optgroup value='Curso complementar'>
                <option value='CT'>Curso técnico</option>
                <option value='CI'>Curso de inglês</option>
                <option value='None'>Nenhum</option>
            </optgroup>
        </select>
    </div>
  );
}

export default Secao3;
