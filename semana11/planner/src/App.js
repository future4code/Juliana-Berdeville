import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Button from '@material-ui/core/Button'

/*styled-components: divs*/
const Background = styled.div`
  height: 100%;
`

const Header = styled.div`
  width: auto;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Planner = styled.div`
  width: auto;
  height: 90vh;
  display: flex;
  flex-direction: row;
`
const Weekday = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right-style:  solid;
  border-right-color: black;
`

const Saturday = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right-style: none;
  border-right-color: none;
`
/*styled-components: divs*/

/*styled-components: buttons*/
const AddButton = styled.button`
  margin-top: 7px;
  margin-left: 3px;
`
/*styled-components: buttons*/

/*styled-components: input*/
const AddTaskInput = styled.input`
  margin-top: 7px;
  margin-right: 3px;
`
/*styled-components: input*/

/*styled-components: paragraph*/
const WeekdayName = styled.p`
  display: flex;
  align-self: flex-start;
  justify-self: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
`
/*styled-components: paragraph*/

function App() {

  /*Definição de estados que guardarão as informaações que mudam*/
  const [task, setTask] = useState([{id: 1, texto: 'AAA', done:false}, {id: 2, texto: 'BBB', done:false}]) /*As tarefas são um array vazio, no começo*/
  const [filter, setFilter] = useState(['']) /*Os filtros são strngs vazias no começo também*/
  const [inputValue, setInputValue] = useState(['']) /*Assim como o valor do Input*, no começo/
  /*Definição de estados que guardarão as informaações que mudam*/

  /*Função onChange que pega e altera o valor do input*/
  const onChangeInputValue = (event) => {
    setInputValue(event.target.value)
  }
  /*Função onChange que pega e altera o valor do input*/

  /*Adiciona uma tarefa à lista*/
  const addTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: inputValue,
      done: false
    }

    const novaListaDeTarefas = [...task, novaTarefa]

    setTask(novaListaDeTarefas)

    alert(novaListaDeTarefas)
  }
  /*Adiciona uma tarefa à lista*/

  /*As tarefas são inseridas num array e lá ficam armazenadas. Para que possam ser distribuídas de 
    acordo com os dias da semana, precisamos vasculhar esse array
  */


  return (
    <Background>
        <Header>
            <AddTaskInput type="text" placeholder="task goes here" onChange={onChangeInputValue}></AddTaskInput>
            <AddButton onClick={addTarefa}>Add</AddButton>
            <optgroup>
                <select>
                    <option value="sunday">sunday</option>
                    <option value="monday">monday</option>
                    <option value="tuesday">tuesday</option>
                    <option value="wednesday">wednesday</option>
                    <option value="thursday">thursday</option>
                    <option value="friday">friday</option>
                    <option value="saturday">saturday</option>
                </select>
            </optgroup>
        </Header>
        <br></br>
        <Planner>
          <Weekday> <WeekdayName> sunday </WeekdayName> </Weekday>
          <Weekday> <WeekdayName> monday </WeekdayName> </Weekday>
          <Weekday> <WeekdayName> tuesday </WeekdayName> </Weekday>
          <Weekday> <WeekdayName> wednesday</WeekdayName> </Weekday>
          <Weekday> <WeekdayName> thursday </WeekdayName> </Weekday>
          <Weekday> <WeekdayName> friday </WeekdayName> </Weekday>
          <Saturday> <WeekdayName> saturday </WeekdayName> </Saturday>
        </Planner>
    </Background>
  );
}

export default App;
