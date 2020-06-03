import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
 
`
/*styled-components: buttons*/

/*styled-components: input*/
const AddTaskInput = styled.input`
  
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
  return (
    <Background>
        <Header>
            <AddTaskInput type="text" placeholder="task goes here"></AddTaskInput>
            <AddButton>Add</AddButton>
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
