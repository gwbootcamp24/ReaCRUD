import Todo from './Todo'
import Listbody from './Listbody'

const TodoList = ( {data, onChangeTodo, onDeleteTodo} ) => {

  console.log("data",data)

    return ( 
        <>
            <Listbody>
                {data.todos.map((todo, index) => {
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
