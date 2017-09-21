import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home'
import Portfolio from './components/Portfolio'
import About from './components/About'
import BaseLayout from './components/BaseLayout'



ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
   <Switch>
     <Route path="/portfolio" component={Portfolio} />
     <Route path="/about" component={About} />
     <Route path="/" component={Home}/>
   </Switch>

   </BaseLayout>

 </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
