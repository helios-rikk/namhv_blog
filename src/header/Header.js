import React, { Component } from 'react';
import logo from '../images/NamHV.jpg';
import facebook from '../images/ic_header_facebook.png';
import twitter from '../images/ic_header_twitter.png';
import linkedin from '../images/ic_header_linkedin.png';
import github from '../images/ic_header_github.png';
import * as socialUrl from '../Constants.js'
import './Header.css';

class Header extends Component {
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
              <a target="_blank" href={socialUrl.FACEBOOK}>
                <img src={facebook}/>
              </a>
              <a target="_blank" href={socialUrl.TWITTER}>
                <img src={twitter}/>
              </a>
            </tr>
            <tr>
              <a target="_blank" href={socialUrl.LINKED_IN}>
                <img src={linkedin}/>
              </a>
              <a target="_blank" href={socialUrl.GITHUB}>
                <img src={github}/>
              </a>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Header;
