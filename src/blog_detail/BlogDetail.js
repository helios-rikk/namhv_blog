import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './BlogDetail.css';

class BlogItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="Blog-detail-item-border">
        <div className="Blog-detail-item">
          <ReactMarkdown className="Blog-detail-description " source={this.props.blog.description}/>
          <div className="Blog-detail-footer">
            <label className="Blog-detail-footer-author">Author: NamHV</label>
            <label className="Blog-detail-footer-created_date">Created at: 01Jan1992</label>
          </div>
        </div>
      </a>
    );
  }
}

export default BlogItem;
