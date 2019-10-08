import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Stories from './Stories';
import Header from './Header';
import Comments from './Comments';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/'>
          <Header heading="Hacker News" />
          <Stories />
        </Route>
        <Route path='/comments/:id'
          render={
            ({ match }) => (
              <React.Fragment>
                <Header heading="Comments" />
                <Comments match={match} />
              </React.Fragment>
            )
          } />
      </BrowserRouter>
    );
  }
}

export default App;
