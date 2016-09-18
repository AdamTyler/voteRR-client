import React from 'react';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';

export default class Voting extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>{this.props.voteTitle}</h1>
          {this.props.winner ?
            <Winner ref="winner" winner={this.props.winner} /> :
            <Vote {...this.props} />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    voteTitle: state.getIn(['vote', 'title']),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps)(Voting);
