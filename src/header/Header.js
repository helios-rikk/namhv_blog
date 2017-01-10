import React, { Component } from 'react';
import logo from '../images/NamHV.jpg';
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
        </div>
      </div>
    );
  }
}

export default Header;
