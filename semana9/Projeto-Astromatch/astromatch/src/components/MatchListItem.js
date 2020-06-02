import React from 'react'
import {useState, useEffect} from 'react'
import styled from 'styled-components'

const MatchInfoContainer = styled.div`
            display: flex;
            border-bottom: darkgrey 1px solid;
            width: 600px;
`
const MatchIcon = styled.img`
            width:70px;
            height:90px;
            border-radius: 100%;
            align-items: flex-start;
`
const MatchName = styled.p`
           margin-top: 20px;
           padding: 20px;
`
const MatchDummyText = styled.p ` 
            font-size: 15px;
            color: darkgrey;
            display: flex;
            align-items: flex-end;
            margin-left: -75px;
`

function MatchListItem(props) {

    return (
                <MatchInfoContainer>
                    <MatchIcon src={props.profile.photo} alt={`${props.profile.name} is a match!`}/>
                    <MatchName>{props.profile.name}</MatchName> 
                    <MatchDummyText>wassup</MatchDummyText>
                </MatchInfoContainer>
            )
}

export default MatchListItem;