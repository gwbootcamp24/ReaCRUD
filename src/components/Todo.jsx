import Button from './Button'
import Shorttext from './Shorttext'
import Datepicker2 from './Datepicker2'

const Todo = ({shortText}) => {
    return (
        <>
        <div className="todoWrapper">
            <Shorttext shortText={shortText} />
            <div className="controls">
                <div className="btnRow">
                    <Button {...{myClass:"test", myText: "Edit"}} />
                    <Button {...{myClass:"test", myText: "Check"}} />
                    <Button {...{myClass:"test", myText: "Delete"}} />
                </div>
                <Datepicker2 />
            </div>
        </div>
        </>
    )
}


export default Todo; 