import { useState } from 'react';
import './App.css';
import TodoTable from './TodoTable';
import TodoList from './TodoList';

function App() {
  const [kentta, setKentta] = useState({ teksti: '', pvm: '' });
  const [todo, setTodo] = useState([]);

  const kenttaMuuttui = (event) => {
    setKentta({
      ...kentta,
      [event.target.name]: event.target.value
    });
  };

  const lisaus = (event) => {
    event.preventDefault();
    setTodo([...todo, kentta]);
    setKentta({ teksti: '', pvm: '' });
  };

  const poistaTehtava = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <div>
      <h1>Todolist</h1>
      <TodoList props={{kenttaMuuttui, lisaus, kentta, todo}}/>

      <TodoTable props={{todo, poistaTehtava}}/>
    </div>
  );
}

export default App;