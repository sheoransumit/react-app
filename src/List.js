import React, { Component } from 'react';

class ListItem extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return <li>{this.props.value}</li>;
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <ul>
        {this.props.numbers.map((number, index) =>
          <ListItem key={index}
                    value={number.snippet.title} />
        )}
      </ul>
    );
  }
  
}
export default List;