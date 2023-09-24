import { useState } from 'react';
import { User, NewUser } from './user';

export default function App()  {
  const initialUsers = [
    { id: 1, name: 'Ivan', years: 30 },
    { id: 2, name: 'Marko', years: 35 },
    { id: 3, name: 'Ana', years: 25 },
  ]

  const [users, setUsers] = useState(initialUsers)

  const handleButtonPress = () => {
    const newUsers = users.map(user => {
      return { ...user, years: user.years + 1 };
    });

    setUsers(newUsers);
  };

  const handleNameChange = (event, index) => {
    const newUsers = [...users];

    newUsers[index].name = event.target.value;
    setUsers(newUsers);
  };

  const addNewUser = ({ name, years }) => {
    const newUser = {
      id: `${name}_${new Date().getTime()}`,
      name,
      years,
    };

    setUsers([...users, newUser]);
  };

    return (
      <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <button onClick={handleButtonPress}>Promjena godina</button>

        {users.map((user, index) => (
          <User
            key={user.id}
            name={user.name}
            years={user.years}
            onNameChange={event => handleNameChange(event, index)}
          />
        ))}

        <NewUser onUserSubmit={addNewUser} />
      </div>
    );
}