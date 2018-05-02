import React from 'react';
import Button from './button'

const Welcome = () => {
    return (
        <React.Fragment>
            <div style={welcomeStyle}>
            <h2>Hello there </h2>
            <h3>Welcome to Dahee's Note</h3>
            <h4>Let's take some note</h4>
            <Button />
            </div>
        </React.Fragment>
    )
}

const welcomeStyle = {
    fontFamily: 'Helvetica Neue',
    color: '#8C9EFF',
    fontSize: '20px',
    margin: '8px',
    height: '300px',
    overflow: 'hidden',
    boxShadow: '2px 2px 4px #999',
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    justifyContent: 'center',
    alignItems: 'center',
}
export default Welcome