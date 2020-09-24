import React from 'react';
import { Switch , Route} from 'react-router-dom';
import LandingPage from './landingpage';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';
import About from './aboutme';

const Main = () =>{
      return (
          <Switch>
               <Route exact path='/' component={LandingPage}/>
               <Route exact path='/Projects' component={Projects}/>
               <Route exact path='/Contact' component={Contact}/>
               <Route exact path='/Resume' component={Resume}/>
               <Route exact path='/About' component={About}/>
              
              </Switch>
      )
}

export default Main;