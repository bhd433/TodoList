import { useState } from 'react';
import './App.css';
import TodoTable from './TodoTable';

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
      <form onSubmit={lisaus}>
        <input type="text" name="teksti" value={kentta.teksti} onChange={kenttaMuuttui} placeholder="Tehtävä" />
        <input type="text" name="pvm" value={kentta.pvm} onChange={kenttaMuuttui} placeholder="Päivämäärä" />
        <button type="submit">Lisää</button>
      </form>

      <TodoTable props={{todo, poistaTehtava}}/>
    </div>
  );
}

export default App;