import './App.css'
import { useState } from 'react'
import { UserClass, UserFunction, UserChildren } from './user'

function App() {

  const initialUsers = [
    { id: 1, name: 'Ivan', years: 30 },
    { id: 2, name: 'Marko', years: 35 },
    { id: 3, name: 'Ana', years: 25 },
  ]

  const [users, setUsers] = useState(initialUsers)

  const tekst = "Proizvoljan tekst"


  const uvecajGodine = () => {
    setUsers(prevState => {
      const updatedUsers = prevState.map(user => {
        return { ...user, years: user.years + 1 }
      })
      return updatedUsers
    })
  }

  const handleChangeName = event => {
    const newUsers = [...users]
    newUsers[1].name = event.target.value
    setUsers(newUsers)
  }

  return (
    <>
      <h1>State</h1>
      <UserClass name={users[0].name} years={users[0].years} />
      <UserFunction name={users[1].name} years={users[1].years} changeName={handleChangeName} />
      <UserChildren name={users[2].name} years={users[2].years}>
        {tekst}
      </UserChildren>
      <button onClick={uvecajGodine}>Uvecaj godine</button>
    </>
  )
}

export default App
