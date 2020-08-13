import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import route from './Route';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Route>
          {route}
        </Route>
        
        </BrowserRouter>
      </div>
    )
  }
}



