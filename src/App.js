import React from 'react'
import './App.css';
import Todo from './component/Todo';

function App() {
  const todos=[
    {id:1,title:"bring grocery",completed:false},
    {id:2,title:"wash dishes",completed:true},
  ]
  return (
    <div className="App">
      {
        todos.map((todo) => {
          return (<Todo todo={todo} />)
        })
      }
        <Todo />
    </div>
  );
}

export default App;