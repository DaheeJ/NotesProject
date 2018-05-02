import React from 'react';

const Note = ({ text, style, del }) => {
    return (
        <div style={style}>
            <span>{text}</span>
            <button onClick={del}>DELETE</button>
        </div>
    )
}

export default Note