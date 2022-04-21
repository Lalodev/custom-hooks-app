import { useState } from "react";

const useTodos = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    newTodo.id = Date.now();

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return [todos, addTodo, deleteTodo];
};

export default useTodos;
