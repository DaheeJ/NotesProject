import React from 'react'


class Note extends React.Component {
    state = {
        note: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id
        // props: { match: { params: { id: 'asdf' }}}
        fetch(`http://localhost:5003/notes/${id}`)
            .then((res) => res.json())
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