import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

//components
import Player from  './Player';

export default class PlayerList extends React.Component {
  renderPlayers() {
    let { players } = this.props;

    if(players.length === 0) {
      return (
          <div className="item">
            <p className="item__message">Molimo, unesite igrače za poćetak</p>
          </div>
       );
    } else {
      return players.map((player) => {
        return ( <Player key={player._id} player={player} /> );
      });
    }

  }
  render() {
    return(
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
