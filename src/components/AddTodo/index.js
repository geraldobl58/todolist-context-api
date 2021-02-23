import React, { useContext, useState } from 'react';

import { TodoContext } from '../../contexts/TodoContext';

const AddTodo = () => {
  const { saveTodo } = useContext(TodoContext);

  const [todo, setTodo] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveTodo(todo);
  };

  const handleInputChange = (e) => {
    setTodo({
      ...todo,
      title: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Nova Tarefa"
          onChange={handleInputChange}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddTodo;
