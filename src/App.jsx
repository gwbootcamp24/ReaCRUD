import { useReducer } from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Button from './components/Button'
import TodoList from './components/TodoList'
import Listhead from './components/Listhead'





function todosReducer(curList, action) {
  switch (action.type) {
    case 'addTodo': {
      const newTodo =     { id: crypto.randomUUID(), shortText: "--was wollte ich nochmal machen?--", done: false };

      const changedList = curList.todos.concat(newTodo)
      return {
        id: curList.id,
        title: curList.title,
        todos: changedList

      }
    }
    case 'changed': {
      const changedList = curList.todos.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
      return {
        title: curList.title,
        todos: changedList

      }
        

    }
    case 'changedTitle': {
      console.log(action)
      const changedList = curList.todos.map(t => {
        return t;
      });
      return {
        title: action.task.title,
        todos: changedList

      }
        

    }
    case 'deleted': {
      const changedList = curList.todos.filter ((t) => t.id !== action.id);
      return {
        title: curList.title,
        todos: changedList
      } 
    }

    case "nextList": {
      let thisId = action.allLists.findIndex((list) => list.id === action.currentList.id)
      return(action.allLists[(thisId + 1) % action.allLists.length])
    } 
    
    case "lastList": {
      let thisId = action.allLists.findIndex((list) => list.id === action.currentList.id)
      return(action.allLists[(thisId + action.allLists.length - 1) % action.allLists.length ])
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
    id:12436,
    title: listTitle,
    todos: testTodos
  }

  const testListe2={
    id:26386,
    title: listTitle2,
    todos: testTodos2
  }

   const allLists = [testListe, testListe2]
  


  const [allLists2, setTodos] = useState([]);




  
  // Load TODOs from local storage on app startup
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('allLists'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);


// Update local storage whenever TODOs change
useEffect(() => {
  localStorage.setItem('allLists', JSON.stringify(allLists));
}, [allLists]);

  
  const [list, dispatch] = useReducer(
    todosReducer,
    allLists[0]
  );

  // const [todoListen, dispatchL] = useReducer(
  //   todoListsReducer,
  //   allLists
  // );



  let initialListId = 0;

  
    // const [list2, setList] = useState(allLists[0]);
  
    // function handleClick() {
    //   let nextListId = (initialListId + 1) % 2;
    //   let nextList = allLists[nextListId];
    //   setList(nextList);
    // }


    
    function handlePageList( currentList, allLists, direction ) {
      dispatch({
        type: (direction === "left")?'lastList':'nextList',
        allLists: allLists,
        currentList: currentList
      });
    }

    function handleChangeTodo(todo) {
      dispatch({
        type: 'changed',
        task: todo
      });
    }

    function handleChangeTitle(todo) {
      dispatch({
        type: 'changedTitle',
        task: todo
      });
    }

    function handleDeleteTodo(taskId) {
      dispatch({
        type: 'deleted',
        id: taskId
      });
    }

    function handleAddTodo(currentList) {
      dispatch({
        type: 'addTodo',
        id: currentList
      });
    }

    function handleAddList(currentList) {
      dispatch({
        type: 'addList',
        id: currentList
      });
    }
// console.log("currentList",{list});, onNextList
  return (
    <>
      <Listhead currentList={list} onAddList={handleAddList} allLists={allLists} onPageList={handlePageList} onChangeTitle={handleChangeTitle}  />
        <TodoList currentList={list} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo} onAddTodo={handleAddTodo} />
         
    </>
  )
}

export default App
