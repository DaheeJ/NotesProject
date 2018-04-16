import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Welcome from './welcome';
import Home from './home';
import NewP from './newP';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='/new' exact component={NewP} />
        <Route path='/home' exact component={Home} />
        <Route path='/' exact component={Welcome} />
      </div>
    </BrowserRouter>
  )
}