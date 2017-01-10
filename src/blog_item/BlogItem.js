import React, { Component } from 'react';
import './BlogItem.css';

class BlogItem extends Component {
  constructor(props) {
      super(props);
      this.state = {isToggleOn: true};

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

  render() {
    return (
      <a href="#" onClick={this.handleClick} className="Blog-item-border">
        <div className="Blog-item">
          <div className="Blog-title">
            <label className="Blog-title-content">{this.props.blogInfo.title}</label>
          </div>
          <div className="Blog-description">
            <label className="Blog-description-content">{this.props.blogInfo.description}</label>
          </div>
          <div className="Blog-footer">
            <label className="Blog-footer-author">Author: NamHV</label>
            <label className="Blog-footer-created_date">Created at: 01Jan1992</label>
          </div>
        </div>
      </a>
    );
  }

  handleClick() {
      window.location.replace("/post/" + this.props.blogInfo.id);
  }
}

export default BlogItem;
