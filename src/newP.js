import React from 'react';
const thing = () => window.alert('i saved ur note!')

const NewNote = ({ handleClick = thing }) => {
    return (
      <div> 
        <textarea cols="40" rows="20" />
        <button onClick={handleClick}>SAVE</button>
      </div>
    )
}

export default NewNote