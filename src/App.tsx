import React from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";

import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';

function App() {
  
  //scroll to top on page refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <Router>
      <Header/>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
