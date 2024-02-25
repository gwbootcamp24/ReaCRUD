import { useState } from 'react'
import Button from './Button'
import Shorttext from './Shorttext'
import Datepicker2 from './Datepicker2'

const Todo = ({shortText, onChange, onDelete, todo}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    return (
        <>
        <div className="todoWrapper">
        <Shorttext shortText={shortText} isEditing={isEditing} setIsEditing={setIsEditing} onChange={onChange} todo={todo} />
            <div className="controls">
                <div className="btnRow">
                    <Button key={1} {...{myClass:"test", myText: "Edit"}} onClick={() => {
                        setIsEditing(true)} 
                    }
                        />
                    <Button key={2} {...{myClass:"test", myText: "Check"}} onClick={() => setIsChecked(!isChecked)} isChecked={isChecked} />
                    <Button key={3} {...{myClass:"test", myText: "Delete"}} onClick={() => onDelete(todo.id)} />
                </div>
                <Datepicker2 />
            </div>
        </div>
        </>
    )
}


export default Todo; 