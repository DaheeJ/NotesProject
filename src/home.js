import React from 'react';
import { Link } from 'react-router-dom'
import Note from './note'

import r2 from 'r2'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

// () parens
// [] brackets
// {} braces
// [].map :: (element, index) -> lkjsdlfkjsdf

const noteStyle = {
    margin: '8px',
    height: '300px',
    overflow: 'hidden',
    boxShadow: '2px 2px 4px #999',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    fontFamily: 'Helvetica Neue',
    fontSize: '20px',
    color: 'rebeccapurple',
    padding: '16px'
}
const homestyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
}

const addNewStyle = Object.assign({}, noteStyle, {
    textDecoration: 'none',
    color: '#51BAD1',
    textAlign: 'center',
    lineHeight: '300px'
});
const someButt = {
    lineHeight: 1,
    display: 'inherit',
    alignSelf: 'center',
    marginTop: '80px'
};

class Home extends React.Component {
    state = {
        notes: []
    }

    componentDidMount () {
        this.fetchAllNotes()
    }

    // DRY
    // Don't Repeat Yourself
    fetchAllNotes = () => {
        r2('http://localhost:5003/notes').json
            .then((notes) => this.setState({ notes }))
    }

    deleteNote = (id) => () => {
        r2.delete(`http://localhost:5003/notes/${id}`).text
            .then(() => {
                this.fetchAllNotes()
            })
    }

    render () {
        return (
           <div style={homestyle}>
                <Link to='/new' style={addNewStyle}>
                    <FloatingActionButton style={someButt} mini={true}>
                        <ContentAdd />
                    </FloatingActionButton>
                 Add a Note
               </Link>
               {this.state.notes.map(({ id, body }) => {
                   return <Note del={this.deleteNote(id)} key={id} text={body} style={noteStyle} />
               })}
            </div> 
        )
    }
}


export default Home