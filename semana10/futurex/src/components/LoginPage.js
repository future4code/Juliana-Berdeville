/*Importações necessárias ao projeto*/
import React, {useState} from 'react';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router'
import axios from 'axios';
/*Importações necessárias ao projeto*/

/*Estilização da página*/
const BackgroundDiv = styled.div`
    background-image: url("/background-futurex.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height:100vh;
    display: flex;
    flex-direction: row;
`
const InputDiv = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 700px;
    height: 180px;
    align-self: center;
    justify-self: center;
    position: absolute;
`
const LoginInput = styled(TextField)`
    width: 300px;
    height:auto;
`
const DivDepoimento = styled.div`
  display: flex;
  flex-direction: column;
  height: 180px;
  margin-left: 130px;
  margin-top: 230px;
  position: fixed;
`
const H1Depoimento = styled.h1`
  font-size: 30px;
  font-family: 'Hind', sans-serif;
`
const PDepoimento = styled.h1`
  font-style: italic;
  font-size: 14px;
  font-weight: lighter;
  font-family: 'Hind', sans-serif;
  width: 200px;
`
const LogoDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    width: 30%;
    height: 15%;
    margin-left: 500px;

`
const LogoH1Future = styled.h1`
    font-family:'Playfair Display', serif;
    font-size: 80px;
`
const LogoH1X= styled.h1`
    font-family: 'Courgette', cursive;
    font-size: 100px;
    color: #f1e3cb;
    padding-left: 2px;
    padding-top: 10px;
        :hover 
            {
                transition: 2s;
                color: #581c0c;
            }
`
const UserIcon = styled.img`
  border-radius: 100%;
  width: 250px;
  height: 250px;
  margin-left:-635px;
  margin-top: 340px;
`
 const CustomButton = styled(Button)`
   background-color: #581C0C;
   color: #ffff;
 `
/*Estilização da página*/


function LoginPage () {

  /*Manipulação de rotas*/
  const history = useHistory()
  const goToHomePage = () => { history.push("/") }
  const goAdminPage = () => { history.push("/Administrador") }
/*Manipulação de rotas*/

/*Integração com a API - Login*/
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-berdeville"
const [email, setEmail] = useState(' ')
const [password, setPassword] = useState(' ')
// const loginFunc = async () => {
//   const body = {
//                   email: email,
//                   pass: pass
//                }
//     console.log("OLHA AQUIII" + email +pass)
//                try {
//             const response = await axios.post(`${baseUrl}/login`, body,{
//               headers:{
//                         'Content-Type':'application/json'
//                       }
//             })
//             localStorage.setItem('token', response.data.token)
//             history.push("/Administrador")
//         }
//           catch (e) {
//                     console.log('Oops! Login operation failed.' + e)
//                 }
// }
// const Logout = () => { localStorage.clear() }
const login = async() => {
  const body = {
      email: email, 
      password: password
  }
  console.log(email)
  try{
      const response = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-berdeville/login', body, {
          headers:{ 
              'Content-Type': 'application/json'
          }
      })

      localStorage.setItem('token', response.data.token)
      history.push("/Administrador")
  } catch(e) {
      alert('login ou senha incorreto')
  }
}
  return (
    <BackgroundDiv>
      <LogoDiv>
        <LogoH1Future onClick={goToHomePage} title="Voltar para Homepage">Future</LogoH1Future><LogoH1X>X</LogoH1X>
      </LogoDiv>
        <UserIcon src="https://www.hypeness.com.br/wp-content/uploads/2019/09/Vira-lata_Caramelo_1.jpg" alt="user icon"/>
      <DivDepoimento>
        <H1Depoimento>Vira-lata caramelo</H1Depoimento>
        <PDepoimento>
          A viagem pra Netuno foi uma das melhores da minha vida.
          Ter feito com ajuda da Future X tornou-a ainda melhor!
        </PDepoimento>
      </DivDepoimento>
        <InputDiv>
          <LoginInput label="email" margin="normal" variant="outlined" value={email} onChange={e=>setEmail(e.target.value)}/>
          <LoginInput label="senha" margin="normal" variant="outlined" value={password} onChange={e=>setPassword(e.target.value)}/>
          <CustomButton onClick={login}>LOGIN</CustomButton>
        </InputDiv>
    </BackgroundDiv>
  );
}

export default LoginPage;