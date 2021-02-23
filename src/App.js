import React from 'react';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoProvider from './contexts/TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <TodoList />
      <AddTodo />
    </TodoProvider>
  );
};

export default App;
