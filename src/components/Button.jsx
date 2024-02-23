const Button = ({onClick, myClass, myText}) => {
    return (
        <button onClick={onClick} className={myClass}>{myText}</button>
    )
}


export default Button; 