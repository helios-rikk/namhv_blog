import React, { Component } from 'react';
import Firebase from 'firebase';
import BlogItem from '../blog_item/BlogItem.js';
import './Container.css';

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
       blogs: []
    }
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
      Firebase.database().ref('/blogs/').once('value').then(snapshot => {
        const newBlogs = snapshot.val();
        this.setState({blogs : newBlogs})
      });
  }

  createBlog = (blog) => {
    return <BlogItem key={blog.id} blogInfo={blog}/>;
  }

  createBlogs = (blogs) => {
    return blogs.map(this.createBlog);
  }

  render() {
    return (
      <div className="App-container">
        <div>
          {this.createBlogs(this.state.blogs)}
        </div>
      </div>
    );
  }
}

export default Container;
