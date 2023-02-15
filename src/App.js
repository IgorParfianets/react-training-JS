import './App.css';
import { useState } from 'react';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodoList] = useState([]);

  const addTodoHandler = (text) => {
    setTodoList([...todos, text]);
  };

  const removeTodoHandler = (index) => {
    setTodoList(todos.filter((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
