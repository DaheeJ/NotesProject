import React from 'react';
import { Link } from 'react-router-dom'
import Note from './note'

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
    color: 'salmon',
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
        fetch('http://localhost:5003/notes')
            .then((res) => res.json())
            .then((notes) => this.setState({ notes }))
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
                   return <Note key={id} text={body} style={noteStyle} />
               })}
            </div> 
        )
    }
}


export default Home