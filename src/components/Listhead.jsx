import Button from "./Button";

const Listhead = ({listTitle}) => {


 



    return ( 
        <>
            <div className="listTop">
                <Button key="lastList" myClass="lastList" myText="🡐" />    
                <h1 key="listTitle">{listTitle}</h1>
                <Button key="EditList" {...{myClass:"test", myText: "Edit"}} />
                <Button key="nextList" myClass="nextList" myText="🡒" />
            </div>
        </>
    )
}

export default Listhead; 
