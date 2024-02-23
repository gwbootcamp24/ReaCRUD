import Button from "./Button";

const Listhead = ({listTitle}) => {


    function handleClick() {
        const nextShapes = shapes.map(shape => {
          if (shape.type === 'square') {
            // No change
            return shape;
          } else {
            // Return a new circle 50px below
            return {
              ...shape,
              y: shape.y + 50,
            };
          }
        });
        // Re-render with the new array
        setShapes(nextShapes);
      }





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
