import React from 'react';

import './todo-input.css';

export const TodoInput = ({ value, onChange, onKeyPress }) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  </div>
);