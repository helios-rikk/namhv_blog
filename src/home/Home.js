import React, { Component } from 'react';
import Header from '../header/Header.js'
import Footer from '../footer/Footer.js'
import Container from '../container/Container.js'

class Home extends Component {

  constructor(props) {
    super(props);
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

export default Home;
