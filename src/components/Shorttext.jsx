const Shorttext = ({shortText, isEditing, setIsEditing,onChange, todo}) => {
    let taskContent;
    if (isEditing) {
        taskContent = (
        <>
          <input
            value={shortText}
            onChange={e => {
              onChange({
                ...todo,
                shortText: e.target.value
              });
            }} />
          <button onClick={() => setIsEditing(false)}>
            Save
          </button>
        </>
      );
    } else {
        taskContent = shortText
    }
    return (
        <>
            <div className="shortText">
                {taskContent}
            </div>
        </>
    )
}

export default Shorttext; 

