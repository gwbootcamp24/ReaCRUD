import { useReducer } from 'react';
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import TodoList from './components/TodoList'
import Listhead from './components/Listhead'





function todosReducer(tasks, action) {
  console.log("fffffffffffffffffffffffffffff", tasks)
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      const changedList = tasks.todos.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
      return {
        title: "sioldfiuzahsi",
        todos: changedList

      }
        

    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}






function App() {

   


  const testTodos = [
    { id: 0, shortText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, possimus quos accusamus aspernatur quam quibusdam labore illo nihil animi amet?", done: true },
    { id: 1, shortText: " adipisicing elit. Magni, possimus quos accusamus aspernatur quam quibusdam labore illo nihil animi amet?", done: false },
    { id: 2, shortText: "Lorem ipsum dolor, sit amicing elit. Magni, possimus quos accusamus aspernatur quam quibusdam labore illo nihil animi amet?", done: false },
    { id: 3, shortText: "Lorem ipsum dolor, sit amelit. Magni, possimus quos accusamus aspernatur quam quibusdam labore illo nihil animi amet?", done: false }

  ]
  const testTodos2 = [
    { id: 0, shortText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, possimus quos accusamus aspernatur quam quibusdam labore illo nihil animi amet?", done: true },
    { id: 1, shortText: " adipisicing elit. Magni, possimus quos accusamus aspernatur quam quibusdam labore illo nihil animi amet?", done: false },
    { id: 2, shortText: "Lorem ipsum dolor, sit amicing elit. Magni, possimus quos accusamus aspernatur quam quibusdam labore illo nihil animi amet?", done: false }

  ]


  const listTitle="My Title for the List"
  const listTitle2="2.List"
  
  const testListe={
    title: listTitle,
    todos: testTodos
  }

  const testListe2={
    title: listTitle2,
    todos: testTodos2
  }

  const testListen = [testListe, testListe2]
  
  
  const [list, dispatch] = useReducer(
    todosReducer,
    testListen[0]
  );



  let initialListId = 0;

  
    const [list2, setList] = useState(testListen[0]);
  
    function handleClick() {
      let nextListId = (initialListId + 1) % 2;
      let nextList = testListen[nextListId];
      setList(nextList);
    }

    function handleChangeTodo(todo) {
      dispatch({
        type: 'changed',
        task: todo
      });
    }
  
    function handleDeleteTodo(taskId) {
      dispatch({
        type: 'deleted',
        id: taskId
      });
    }
  
  return (
    <>
      <button key={23232}  onClick={handleClick}>ergewrgergerg</button>
      <Listhead listTitle={listTitle} />
        <TodoList data={list}  onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo} />
         
    </>
  )
}

export default App
