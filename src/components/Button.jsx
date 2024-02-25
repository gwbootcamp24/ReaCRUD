const Button = ({onClick, myClass, myText, isChecked}) => {
    return (
        <button onClick={onClick} className={myClass + ' ' +  (isChecked === true && 'isChecked')}>{myText}</button>
    )
}


export default Button; 