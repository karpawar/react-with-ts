import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import { Todo } from "./components/todo.model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    console.log(text);
    setTodos([...todos, { id: (Math.random() + 1).toString(), text: text }]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList onDeleteTodo={todoDeleteHandler} items={todos} />
    </div>
  );
};

export default App;
