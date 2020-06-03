import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        {/*Adição do segundo post*/}
        <Post
          nomeUsuario={'Jujuzinha'}
          fotoUsuario={'https://images-na.ssl-images-amazon.com/images/I/512Epoj2chL._AC_SL1000_.jpg'}
          fotoPost={'https://edge.alluremedia.com.au/m/k/2019/09/animalcrossing.jpg'}
        />
        {/*Adição do segundo post*/}

        {/*Adição do terceiro post*/}
        <Post
          nomeUsuario={'Bananinha'}
          fotoUsuario={'https://ih1.redbubble.net/image.749897238.9165/flat,750x1000,075,f.jpg'}
          fotoPost={'https://live.staticflickr.com/4217/34354267604_59f2aca7ed_b.jpg'}
        />
        {/*Adição do terceiro post*/}
      </div>
    );
  }
}

export default App;
