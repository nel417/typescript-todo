import React from "react";
import { TodoListItem } from "./TodoListItem";
// import { List, Typography, Divider } from "antd";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div className="items2">
      <ul className="items">
        {todos.map((todo) => {
          return (
            <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
          );
        })}
      </ul>
    </div>
  );
};
