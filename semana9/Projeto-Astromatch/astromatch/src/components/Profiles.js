import {useState, useEffect} from 'react'
import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const ProfileCard = styled(Card)`
        border-radius: 20px;
        transition: 0.3s;
        width: 95%;
        position: relative;
        max-width: 800;
        margin-left: auto;
        overflow: initial;
        background: white;
        display: flex;
        align-items: center;
        padding: 2px;

`
const ProfileCardMedia = styled(CardMedia)`
          flex-shrink: 0;
          min-width: 50%;
          max-height: 100%;
          padding-top: 48%;
          box-shadow: 4px 4px 20px 1px rgba(252, 56, 56, 0.2);
          border-radius: 20px;
          background-image: linear-gradient(125deg, #c06c84 0%, #f67280 73%); 
          background-color: white;
          overflow: hidden;
`
const ProfileCardContent = styled(CardContent)`
          text-align: left;
          padding-left: 0;
          padding: 2px;  
`
const ProfileBio = styled(Typography)`
           margin-bottom: 2px;
`
const Eww = styled(Button)`
          background-image: linear-gradient(125deg, #c06c84 0%, #f67280 73%);
          box-shadow: 0px 4px 32px rgba(252, 56, 56, 0.4);
          border-radius: 100;
          padding-left: 24;
          padding-right: 24;
          display: flex;
          justify-content: space-between;
                    :hover
                        {
                            color: #cf2a1b;
                            transition: 0.5s;
                        }
`
const Wow = styled(Button)`
          background-image: linear-gradient(125deg, #c06c84 0%, #f67280 73%);
          box-shadow: 0px 4px 32px rgba(252, 56, 56, 0.4);
          border-radius: 100;
          padding-left: 24;
          padding-right: 24;
          display: flex;
          justify-content: space-between;
                    :hover
                        {
                            color: #5fad6f;
                            transition: 0.5s;
                        }
            
`
function Profiles(props) {

/*   A query feita na API está no componente App (Pai dos demais componentes). Os componentes filhos recebem as
    informações da query na API como props - por isso sua forma de componente funcional recebe 'props' como
    argumento 
*/

       return (
        <ProfileCard> {/*<Card>*/}
                <ProfileCardMedia image={props.profile.photo}/> {/*<CardMedia/>*/}
            <ProfileCardContent> {/*<CardContent>*/}
                <ProfileBio>name: {props.profile.name}, {props.profile.age}</ProfileBio> {/*Typography*/}
                <ProfileBio>bio: {props.profile.bio}</ProfileBio> {/*Typography*/}
                <Eww onClick={props.onClickEw}>eww</Eww> {/*Button*/}
                <Wow onClick={props.onClickWow}>wow</Wow> {/*Button*/}
            </ProfileCardContent> {/*<CardContent>*/}
      </ProfileCard> 
    )
}
export default Profiles;