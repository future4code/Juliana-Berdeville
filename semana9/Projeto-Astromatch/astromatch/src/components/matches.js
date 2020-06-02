import React from 'react'
import {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import MatchListItem from './MatchListItem'

const ProfileCard = styled(Card)`
        border-radius: 20px;
        transition: 0.3s;
        width: 95%;
        position: relative;
        max-width: 800;
        margin-left: auto;
        overflow: initial;
        background: #ffffff;
        display: flex;
        align-items: center;
        padding: 2px;
            :hover {
                        transform: translateY(-3px);
                        box-shadow: 0 4px 20px 0 rgba(0,0,0,0.12);
                    }
`
const ProfileCardMedia = styled(CardMedia)`
          flex-shrink: 0;
          width: 40%;
          padding-top: 48%;
          transform: translateX(-24%);
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
          display: flex;
          flex-direction: row;
`

function Matches() {

    const [matches, setMatches] = useState([ ])

     useEffect(() => {
         axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aluno/matches`)
            .then(response => {
                                    setMatches(response.data.matches);
                                    console.log(response.data.matches)
                                })
     }, []);

    return (
        <ProfileCard> {/*<Card>*/}
            <ProfileCardContent> {/*<CardContent>*/}
                {matches.map((profile) => { return <MatchListItem profile={profile}/> })}
            </ProfileCardContent> {/*<CardContent>*/}
      </ProfileCard> 
    )
  }

  export default Matches;

  