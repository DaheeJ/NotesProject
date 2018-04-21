import React from 'react';
import Button from './button'

const Welcome = () => {
    return (
        <React.Fragment>
            <div style={welcomeStyle}>
            <h2>Hello there </h2>
            <h4>Let's take some note</h4>
            <Button />
            </div>
        </React.Fragment>
    )
}

const welcomeStyle = {
    fontFamily: 'Helvetica Neue',
    color: '#B2EBF2',
    fontSize: '20px',
    justifyContent: 'center',
    margin: '8px',
    height: '300px',
    overflow: 'hidden',
    boxShadow: '2px 2px 4px #999',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
    padding: '16px',
    justifyContent: 'center',
    alignItems: 'center',
}
export default Welcome