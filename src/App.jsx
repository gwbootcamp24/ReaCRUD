import { useReducer } from 'react';
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import TodoList from './components/TodoList'
import Listhead from './components/Listhead'





function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
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

  const [tasks, dispatch] = useReducer(
    tasksReducer,
    testTodos
  );


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

  let initialListId = 0;

  
    const [list, setList] = useState(testListen[0]);
  
    function handleClick() {
      let nextListId = (initialListId + 1) % 2;
      let nextList = testListen[nextListId];
      console.log(nextListId);
      setList(nextList);
    }
    function handleChangeTask(task) {
      dispatch({
        type: 'changed',
        task: task
      });
    }
  
    function handleDeleteTask(taskId) {
      dispatch({
        type: 'deleted',
        id: taskId
      });
    }
  
  
  return (
    <>
      <button key={23232}  onClick={handleClick}>ergewrgergerg</button>
      <Listhead listTitle={listTitle} />
        <TodoList data={list}  onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
         
    </>
  )
}

export default App
