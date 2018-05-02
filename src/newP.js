import React from 'react';
import r2 from 'r2'

class NewNote extends React.Component {
  handleClick = (res) => {
    const note = this.textarea.value
    r2.post('http://localhost:5003/newnote', {
      json: { body: note }
    }).json
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