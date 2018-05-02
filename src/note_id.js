import React from 'react'
import r2 from 'r2'

class Note extends React.Component {
    state = {
        note: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id
        // props: { match: { params: { id: 'asdf' }}}
        r2.get(`http://localhost:5003/notes/${id}`).json
            .then((note) => this.setState({ note }))
            .catch((err) => { console.log(err)} )
    }

    render () {
        return (
            <div>{this.state.note.body}</div>
        )
    }
}


export default Note