import React, { Component } from 'react';
import Firebase from 'firebase';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import Home from './page/Home.js'
import Detail from './page/Detail.js'

const FirebaseConfig = {
  apiKey: "AIzaSyDiortt9tpoEHQnBgGeJE4DjM8fXfNgO6k",
    authDomain: "namhvblogs.firebaseapp.com",
    databaseURL: "https://namhvblogs.firebaseio.com",
    storageBucket: "namhvblogs.appspot.com",
    messagingSenderId: "81609368264"
};

class App extends Component {

  constructor(props) {
    super(props);
    Firebase.initializeApp(FirebaseConfig);
    this.state = {};
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/post/*" component={Detail}/>
      </Router>
    );
  }
}

export default App;
