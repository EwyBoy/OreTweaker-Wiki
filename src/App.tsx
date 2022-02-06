import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Form from './components/Form';

export interface IPeople {
  people: {
    name: string
    age: number
  }[]
}

function App() {

  const [people, setPeople] = useState<IPeople["people"]>([
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Joe", age: 27}
  ]);

  people.map(person => {
    return person.name;
  });

  return (
    <div className="App">
        <List people={people} />
        <Form people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
