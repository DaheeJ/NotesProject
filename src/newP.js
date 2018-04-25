import React from 'react';

class NewNote extends React.Component {
  handleClick = () => {
    const note = this.textarea.value
    fetch('http://localhost:5003/newnote', {
      body: JSON.stringify(note),
      method: 'POST'
    })
      .then((res) => res.json())
      .then(({ id }) => {
        window.location.href = `/notes/${id}`
      })
      .catch((err) => { console.log(err) })
  }

  render () {
    return (
        <div>
          <textarea cols="40" rows="20" ref={(textarea) => { this.textarea = textarea }}/>
          <button onClick={this.handleClick}>SAVE</button>
        </div>
    )
  }
}

export default NewNote