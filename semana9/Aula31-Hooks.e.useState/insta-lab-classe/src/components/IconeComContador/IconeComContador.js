import React from 'react'
import styled from "styled-components"

const IconeContainer = styled.div`
	display: flex;

	img {
		margin-right: 5px;
	}
`

function IconeComContador(props) {
	return <IconeContainer>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</ IconeContainer>
}

/*O que esse código faz?
	Há nele duas tags HTML: image e paragraph. 
	A primeira recebe seus atributos externos via props.
	A segunda exibe o resultado do contador - também recebido via props - que consiste no somatório de vezes em que o ícone 
	coração foi clicado (curtidas).
*/

export default IconeComContador