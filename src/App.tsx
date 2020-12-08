import React from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";

import ScrollToTop from './ScrollToTop';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <Router>
      <Header/>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
