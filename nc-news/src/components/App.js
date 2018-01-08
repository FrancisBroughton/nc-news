import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './Homepage';
import Articles from './Articles';
import SingleArticle from './SingleArticle';
import Topics from './Topics';

class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/articles' component={Articles} />
              <Route exact path ='/articles/:id' component={SingleArticle} />
              <Route exact path='/topics' component={Topics} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
  
  export default App;
