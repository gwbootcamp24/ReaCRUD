import { useState } from 'react'
import Button from './Button'
import Shorttext from './Shorttext'
import Datepicker2 from './Datepicker2'

const Todo = ({shortText,onChange, todo}) => {

    const [isEditing, setIsEditing] = useState(false);
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
                    <Button key={2} {...{myClass:"test", myText: "Check"}} />
                    <Button key={3} {...{myClass:"test", myText: "Delete"}} />
                </div>
                <Datepicker2 />
            </div>
        </div>
        </>
    )
}


export default Todo; 