import React, { Component } from 'react';
import Firebase from 'firebase';
import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import Container from './container/Container.js'
import './App.css';

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
      <div>
        <Header/>
        <Container/>
        <Footer/>
      </div>
    );
  }
}

export default App;
