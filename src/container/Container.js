import React, { Component } from 'react';
import Firebase from 'firebase';
import ReactListView from 'react-list-view';
import './Container.css';

class Container extends Component {

  constructor(props) {
    super(props);
    loadData();
    this.state = {};
  }

  render() {
    return (
      <div className="App-container">
        <ReactListView  className="App-blogs"
          rowCount={100}
          rowHeight={10}
          renderItem={(x, y, style) =>
            <div style={style}>
              Item #{x},#{y}
            </div>
          }
        />
      </div>
    );
  }


}
function loadData() {
    return Firebase.database().ref('/blogs/').once('value').then(function(snapshot) {
    var blogs = snapshot.val().blogs;
    // ...
    console.log(username);
  });
}

export default Container;
