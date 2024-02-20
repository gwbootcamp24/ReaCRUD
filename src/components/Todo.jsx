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
                    <Button key={1} {...{myClass:"test", myText: "Edit"}} />
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