import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const useTodo = (initialState) => {
  
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] remove todo",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] toggle todo",
      payload: id,
    };
    dispatch(action);
  };
  const todosCount = todos.length;
  const pendingTodosCount = todos.filter( todo => !todo.done).length;

  return { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, todosCount, pendingTodosCount };
};
