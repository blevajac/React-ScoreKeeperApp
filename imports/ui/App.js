import React from 'react';
import PropTypes from 'prop-types';

//components
import TitleBar  from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component {
  render() {
    let { title, players } = this.props;
    return(
      <div>
        <TitleBar title={title} subtitle="Boris Levajac" />
        <div className="wrapper">
          <PlayerList players={players}/>
          <AddPlayer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};
