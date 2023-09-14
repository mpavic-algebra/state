import './App.css'
import { Component } from 'react'
import { UserClass, UserFunction, UserChildren } from './user'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users: [
        { name: 'Ivan', years: 30 },
        { name: 'Marko', years: 35 },
        { name: 'Ana', years: 25 },
      ],
      tekst: "Proizvoljan tekst"
    }
  }

  uvecajGodine = () => {
    this.setState(prevState => {
      const updatedUsers = prevState.users.map(user => {
        return { ...user, years: user.years + 1 }
      })
      return { users: updatedUsers }
    })
  }

  render() {
    const {users, tekst} = this.state
    return (
      <>
        <h1>State</h1>
        <UserClass name={users[0].name} years={users[0].years} />
        <UserFunction name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          {tekst}
        </UserChildren>
        <button onClick={this.uvecajGodine}>Uvecaj godine</button>
      </>
    )
  }
}

export default App
