import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Fallback from './Components/Fallback';
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
const Projects = lazy(() => import('./Components/Projects/Projects'));
const ProjectDetails = lazy(() => import('./Components/Projects/ProjectDetails'));
const Contact = lazy(() => import('./Components/Contact/Contact'));
const NoMatch = lazy(() => import('./Components/NoMatch'));

function App() {
  
  //scroll to top on page refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <Router>
      <Header/>
      <ScrollToTop>
        <Suspense fallback={<Fallback/>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/:id" component={ProjectDetails} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Suspense>
      </ScrollToTop>
      <Footer/>
    </Router>
  );
}

export default App;
