import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './Homepage';
import Articles from './Articles';
import SingleArticle from './SingleArticle';

class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/api/articles' component={Articles} />
              <Route exact path ='/api/articles/:id' component={SingleArticle} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
  
  export default App;
