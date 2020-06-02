import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
/*Importação do useState(Hooks) para este código react (componente)*/

/*Post é um componente funcional (Função const Post recebe props como parâmetro)*/
const Post = (props) => {
/*Criação do state, suas propriedades e suas funções de alteração*/
  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumerosComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([ ])

  const onClickCurtida = () => {
    if (curtido){
        setCurtido(!curtido)
        setNumeroCurtidas(numeroCurtidas-1)
    }
      else {
          setCurtido(!curtido)
          setNumeroCurtidas(numeroCurtidas+1)
      }
  };

  const onClickComentario = () => {
      setComentando(!comentando)
  };

  const enviarComentario = (comentario) => {
      const listaDeComentarios = [...comentarios, comentario]
      setComentarios(comentarios=listaDeComentarios)
      setComentando(false)
      setNumeroComentarios(numeroComentarios + 1)
    }

  /*IconeCurtida recebe um ternário que alterna entre os ícones de coração preto/branco de acordo com o valor de curtido*/
  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  const iconeCurtida = this.state.curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  const caixaDeComentario = comentando ? (
      <SecaoComentario enviarComentario={enviarComentario}/>
    ) : (
            comentarios.map(comentario => {
            return (
                      <CommentContainer>
                        <p>{comentario}</p>
                      </CommentContainer>
                    )
                                                   })
        ) 

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          // icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          // valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          // valorContador={numeroComentarios}
        />
      </PostFooter>
          {caixaDeComentario}
    </PostContainer>
  )
}

export default Post