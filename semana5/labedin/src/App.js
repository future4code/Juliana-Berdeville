import React from 'react';
import './App.css';
/*Importando os componentes da página*/
import CardGrande from './components/CardGrande/CardGrande'; 
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton'; 
import CardEducacao from './components/CardEducacao/CardEducacao'
/*Importando os componentes da página*/
/*Importando imagens dispostas na página*/
import bananinha from './imagens/Juliana.jpeg'
import batatinha from './imagens/rtm-logo.png'
import abacatezinho from './imagens/labenu-logo.png'
import laranjinha from './imagens/educacao.png'
import cenourinha from './imagens/contato.png'
import cerejinha from './imagens/instagram-icon.png'
import macazinha from './imagens/dev-icon.png'
/*Importando imagens dispostas na página*/
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>About me</h2>
        {/* Chamando o componente CardGrande*/}
          <CardGrande 
            imagem={bananinha}
            nome="Juliana Berdeville" 
            descricao="Oi. Sou Juliana Berdeville, graduanda em Ciência da Computação e estudante da LaBeNu em Web Development Fullstack."
          />
        {/*Chamando o componente CardGrande*/}

        {/*Chamando o componente CardPequeno*/}
          <CardPequeno
            imagem={cenourinha}
            titulo="Entre em contato"
            email = "juju@juju.com"
            endereco = "Rua dos Bobos, n° 0."
            />
        {/*Chamando o componente CardPequeno*/}
        
        {/*Chamando o componente CardEducacao*/}
          <CardEducacao
            imagem={laranjinha}
            titulo = "Educação"
            ies = "Centro Universitário Carioca - UniCarioca"
            texto = "Nunc imperdiet, dolor id suscipit bibendum, nibh erat laoreet libero, et lacinia risus leo nec nulla. Aenean sit amet elementum purus. Donec eu nunc eros."
            />
        {/*Chamando o componente CardEducacao*/}
        
        {/*Chamando o componente ImagemButton */}
          <ImagemButton 
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
            texto="Ver mais"
          />
        {/*Chamando o componente ImagemButton */}
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        {/*Importando o componente CardGrande*/}
          <CardGrande 
            imagem={batatinha}
            nome="RTM" 
            descricao="Atuei em NOC - Network Operational Center - registrando chamados, mantendo rede backbone, prestando suporte à rede privada direcionada ao ambiente de mercado financeiro. 
                      Tempo de atuação: 2017-2019." 
          />
        {/*Importando o componente CardGrande*/}

        {/*Importando o componente CardGrande*/}
        <CardGrande 
          imagem={abacatezinho}
          nome="LaBeNu" 
          descricao="Aprendendo a ser web dev fullstack e quebrando a cabeça com React. Oremos." 
        />
        {/*Importando o componente CardGrande*/}
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        {/*Importando o componente ImagemButton*/}
          <ImagemButton 
            imagem={macazinha}
            texto="DEV.TO" 
          />        
        {/*Importando o componente ImagemButton*/}
          <ImagemButton 
            imagem={cerejinha}
            texto="INSTAGRAM" 
          />        
        {/*Importando o componente ImagemButton*/}
      </div>
    </div>
  );
}

export default App;
