import React from 'react';
import Home from './components/Home/Home';
import Inbox from './components/Inbox/inbox';
import NewsLetter from './components/NewsLetter/newsLetter';
import {Switch,Route} from 'react-router-dom';

const Routes= ()=>(

  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/inbox" component={Inbox}/>
    <Route exact path="/news" component={NewsLetter}/>
  </Switch>

)
export default Routes;