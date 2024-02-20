import Todo from './Todo'

const TodoList = ({data}) => {
    return data.map((todo, index) => {
        
        // Curly brace
        return <Todo shortText={todo.shortText} id={index} />;
       
    })
}

export default TodoList; 
