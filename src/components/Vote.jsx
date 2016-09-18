import React from 'react';

export default class Voting extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  getPair() {
    return this.props.pair || [];
  }
  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }
  isDisabled() {
    return !!this.props.hasVoted;
  }
  render() {
    return (
      <div className="voting col s12">
        <div className="row">
          {this.getPair().map(entry =>
            <div className="col s6">
              <a className="waves-effect waves-light card-panel teal"
                      key={entry}
                      disabled={this.isDisabled()}
                      onClick={() => this.props.vote(entry)}>
                <h1 className="white-text">{entry}</h1>
                {this.hasVotedFor(entry) ?
                  <div className="label">Voted</div> :
                  null}
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}
