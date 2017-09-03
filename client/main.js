import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

//data
import { Players, calculatePlayerPosition } from './../imports/api/players';

//components
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {  //prati promjene koje se događaju unutar aplikacije i renderira po izmjneni
    let players = Players.find({}, { sort: {score: -1} }).fetch();
    let positiondPlayers = calculatePlayerPosition(players);
    let title = 'Score Keeper App';
    ReactDOM.render(<App title={title} players={positiondPlayers}/>, document.getElementById('app'));
  });

});
