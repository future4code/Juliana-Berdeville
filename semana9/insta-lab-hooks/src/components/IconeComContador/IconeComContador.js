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
	</IconeContainer>
}

/*O que esse componente faz? 
	Esse componente diz respeito ao ícone de curtida existente na página (o coraçãozinho). 
	Tem uma tag image que recebe suas propriedades por meio de props (pois os valores são externos ao componente).
	Além disso tem um parágrafo que exibe o número de vezes que o botão de curtida foi clicado, também por props.
*/
export default IconeComContador