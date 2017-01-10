import React, { Component } from 'react';
import Firebase from 'firebase';
import Header from '../header/Header.js'
import Footer from '../footer/Footer.js'
import BlogDetail from '../blog_detail/BlogDetail.js'

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogDetail: {
        id: -1,
        title: "",
        description: ""
      }
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
      Firebase.database().ref('/blogs/3').once('value').then(snapshot => {
        const newBlogDetail = snapshot.val();
        this.setState({blogDetail : newBlogDetail})
      });
  }

  render() {
    console.info(this.state.blogDetail);
    return (
      <div>
        <Header/>
          <BlogDetail blog={this.state.blogDetail}/>
        <Footer/>
      </div>
    );
  }
}

export default Detail;
