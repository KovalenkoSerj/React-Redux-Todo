import React from 'react';
import Todo from './containers/todo/Todo';
import {Title} from './components/title/Title'

function App() {
  return (
    <div className="container">
      <Title title="TodoList" />
      <Todo />
    </div>
  );
}

export default App;
