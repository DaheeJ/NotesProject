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
    padding: '8px',
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
    position: 'absolute'
   
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
                <FloatingActionButton style={someButt} mini={true}>
                    <ContentAdd />
                </FloatingActionButton  >
               <Link to='/new' style={addNewStyle}>
                 Add a Note
               </Link>
               {this.state.notes.map((note, i) => {
                   return <Note key={i} text={note} style={noteStyle} />
               })}
            </div> 
        )
    }
}


export default Home