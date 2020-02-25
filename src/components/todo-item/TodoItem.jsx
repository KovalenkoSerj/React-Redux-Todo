import React from 'react';

import './todo-item.css';

export const TodoItem = ({ text, isCompleted, removeTask, id, completeTask }) => (
  <li className="todo-item">
    <i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} onClick={() => completeTask(id)}/>
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i className="fas fa-times" onClick={() => removeTask(id)}/>
  </li>
);