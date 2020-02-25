import React from 'react';

import {TodoItem} from '../todo-item/TodoItem';

import './todo-list.css';

export const TodoList = ({ tasksList, removeTask, completeTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <TodoItem key={id} text={text} isCompleted={isCompleted} removeTask={removeTask} id={id} completeTask={completeTask} />
    ))}
  </ul>
);