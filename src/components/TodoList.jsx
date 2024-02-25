import Todo from './Todo'
import Listbody from './Listbody'
import Button from './Button'

const TodoList = ( {currentList, onChangeTodo, onDeleteTodo, onAddTodo} ) => {


    return ( 
        <>
            <Button key={"addNewTodo"} {...{myClass:"test", myText: "Add todo"}} onClick={() => onAddTodo(currentList)} />
            <Listbody>
                {currentList.todos.map((todo, index) => {
                    return (
                    <Todo key={index} 
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo} 
                        shortText={todo.shortText} 
                        id={index} 
                        todo={todo}
                    />);
                })}
            </Listbody>
        </>

    )
}

export default TodoList; 
