import React from 'react';
import {List, Map} from 'immutable';

// const pair = List.of('Javascript', 'HTML5');
// const tally = Map({'Javascript': 5, 'HTML5': 3});

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.children;
  }
}
