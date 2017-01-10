import React, { Component } from 'react';
import facebook from '../images/ic_header_facebook.png';
import twitter from '../images/ic_header_twitter.png';
import linkedin from '../images/ic_header_linkedin.png';
import github from '../images/ic_header_github.png';
import * as socialUrl from '../Constants.js'
import './Footer.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="App-footer">
          <a target="_blank" href={socialUrl.FACEBOOK}>
            <img src={facebook}/>
          </a>
          <a target="_blank" href={socialUrl.TWITTER}>
            <img src={twitter}/>
          </a>

          <a target="_blank" href={socialUrl.LINKED_IN}>
            <img src={linkedin}/>
          </a>
          <a target="_blank" href={socialUrl.GITHUB}>
            <img src={github}/>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
