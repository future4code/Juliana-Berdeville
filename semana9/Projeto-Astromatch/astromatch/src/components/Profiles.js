import React from 'react'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Profiles() {

    const [pplprofiles, Setpplprofiles] = useState([ ])

    useEffect(() => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`)
        .then(response => {
            Setpplprofiles(response.data);
        })
        .catch(err => {
            console.log(err);
            });
    }, [ ]);

    return (
      <div>
          {pplprofiles}
      </div>
    );
  }
  export default Profiles;