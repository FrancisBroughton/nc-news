import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './Homepage';
import Articles from './Articles';

class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/api/articles' component={Articles} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
  
  export default App;
