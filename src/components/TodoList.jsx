import Todo from './Todo'
import Listbody from './Listbody'

const TodoList = (
    data,
    onChangeTask,
    onDeleteTask
      
    ) => {
    return ( 
        <>
            <Listbody>
                {data.data.todos.map((todo, index) => {
                    return (
                    <Todo key={index} 
                        onChange={onChangeTask}
                        onDelete={onDeleteTask} 
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
