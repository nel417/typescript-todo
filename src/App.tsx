import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import "./App.css";
const initialTodos: Array<Todo> = [
  { text: "Make Bed", completed: true },
  { text: "Code", completed: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, completed: false }]);
  };
  return (
    <div className="container">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
