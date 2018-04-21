import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Welcome from './welcome';
import Home from './home';
import NewP from './newP';

const muiTheme = getMuiTheme({
  // palette: {
  //   textColor: 'cyan500',
  // },
  // appBar: {
  //   height: 50,
  // },
});

export default () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
    <BrowserRouter>
      <div>
        <Route path='/new' exact component={NewP} />
        <Route path='/home' exact component={Home} />
        <Route path='/' exact component={Welcome} />
      </div>
    </BrowserRouter>
    </MuiThemeProvider>
  )
}