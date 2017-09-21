import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Reference from './components/Reference'
import BaseLayout from './components/BaseLayout'



ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>

   <Switch>
     <Route path="/references" component={Reference}/>
     <Route path= "/contact" component={Contact}/>
     <Route path="/portfolio" component={Portfolio} />
     <Route path="/about" component={About} />
     <Route exact path="/" component={Home}/>
   </Switch>
   </BaseLayout>

 </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
