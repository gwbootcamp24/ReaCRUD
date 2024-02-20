import Todo from './Todo'
import Listbody from './Listbody'

const TodoList = (data) => {
    return ( 
        <>
            <Listbody>
                {data.data.todos.map((todo, index) => {
                    return <Todo key={index} shortText={todo.shortText} id={index} />;
                })}
            </Listbody>
        </>

    )
}

export default TodoList; 
