import React from "react";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <div>
      <li style={{ listStyleType: "none" }}>
        <label
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo)}
          />
          {todo.text}
        </label>
      </li>
    </div>
  );
};
