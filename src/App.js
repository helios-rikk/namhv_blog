import React, { Component } from 'react';
import logo from './images/NamHV.jpg';
import facebook from './images/ic_header_facebook.png';
import twitter from './images/ic_header_twitter.png';
import linkedin from './images/ic_header_linkedin.png';
import github from './images/ic_header_github.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <div className="App-header-avatar">
            <img src={logo} className="App-header-logo" alt="logo" />
          </div>
          <div className="App-header-brand">
            <h2>Hoàng Vũ Nam</h2>
            <h3>Đẹp trai vô địch khắp vũ trụ</h3>
          </div>
          <table className="App-header-social">
            <tr>
              <div className="App-header-social-icon" href="https://facebook.com/namhv.cntt">
                <img src={facebook}/>
              </div>
              <div className="App-header-social-icon" href="https://facebook.com/namhv.cntt">
                <img src={twitter}/>
              </div>
            </tr>
            <tr>
              <div className="App-header-social-icon" href="https://facebook.com/namhv.cntt">
                <img src={linkedin}/>
              </div>
              <div className="App-header-social-icon" href="https://facebook.com/namhv.cntt">
                <img src={github} className="App-header-social-icon"/>
              </div>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
