import React, { Component } from 'react';

export default class RepoUrlRenderer extends Component {
   constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.value} target="_blank">{new URL(this.props.value).pathname.replace("/", "") }</a>
    );
  }
}