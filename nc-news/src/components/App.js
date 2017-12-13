import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';
import Homepage from './Homepage';

class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={Homepage} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
  
  export default App;
