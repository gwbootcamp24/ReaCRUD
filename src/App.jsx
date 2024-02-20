import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import TodoList from './components/TodoList'
import Listhead from './components/Listhead'

function App() {
  const [count, setCount] = useState(0)

  const testTodos = [
    {shortText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, possimus quos accusamus aspernatur quam quibusdam labore illo nihil animi amet?"},
    {shortText: " adipisicing elit. Magni, possimus quos accusamus aspernatur quam quibusdam labore illo nihil animi amet?"},
    {shortText: "Lorem ipsum dolor, sit amicing elit. Magni, possimus quos accusamus aspernatur quam quibusdam labore illo nihil animi amet?"},
    {shortText: "Lorem ipsum dolor, sit amelit. Magni, possimus quos accusamus aspernatur quam quibusdam labore illo nihil animi amet?"}

  ]

  const listTitle="MyTiltle for the List"

  const testListe={
    title: listTitle,
    todos: testTodos
  }

  return (
    <>

      <Listhead listTitle={listTitle} />
        <TodoList data={testListe} />
         
    </>
  )
}

export default App
