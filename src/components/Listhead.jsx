import { useState } from 'react'
import Button from "./Button";

const Listhead = ({ currentList, allLists, onPageList, onChangeTitle }) => {

    const [isEditing, setIsEditing] = useState(false);

    let hlContent 
    if (isEditing) { 
        hlContent = (
            <>
            <input
                value={currentList.title}
                onChange={e => {
                    onChangeTitle({
                    ...currentList,
                    title: e.target.value
                });
                }} />
            <button onClick={() => setIsEditing(false)}>
                Save
            </button>
            </>
        );
    } else {
        hlContent = (<h1 key="listTitle">{currentList.title}</h1>)
    }

    
    return ( 
        <>
            <div className="listTop">
                <Button key="lastList" myClass="lastList" onClick={() => onPageList(currentList, allLists, 'left')} myText="🡐"  />  


                
                {hlContent}

                <Button key="EditList" {...{myClass:"test", myText: "Edit"}} onClick={() => setIsEditing(true)} />
                <Button key="nextList" myClass="nextList" onClick={() => onPageList(currentList, allLists, 'left')} myText="🡒" />
            </div>
        </>
    )
}

export default Listhead; 
