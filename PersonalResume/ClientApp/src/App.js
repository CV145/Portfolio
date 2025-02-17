import React, { Component } from 'react';
import { Route } from 'react-router';
import Draggable from 'react-draggable'
import { Layout } from './components/Layout';
import { Jobs } from './components/Jobs';
import { Education } from './components/Education';
import { Projects } from './components/Projects';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Projects} />
        <Route path='/projects' component={Projects} />
      </Layout>
    );
  }
}

//<Route path='/jobs' component={Jobs} />
//<Route path='/education' component={Education} />