import React from 'react';

const Note = ({ text, style }) => {
    return (
        <div style={style}>
            <span>{text}</span>
        </div>
    )
}

export default Note