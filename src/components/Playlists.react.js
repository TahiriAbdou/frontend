import React from 'react/addons';
import Router from 'react-router';

var Playlists = React.createClass({
  render: function () {
    return (

<ul id="playlistContainer" className="nav nav-playlist">
        <li className="nav-title"><div className="pull-right"><a><i className="material-icons">chevron_right</i></a></div>PLAYLIST</li>

        <li className="playlist-study"><a ><i className="material-icons">play_arrow</i><span>Study</span></a></li>
         <li className="playlist-study"><a ><i className="material-icons">play_arrow</i><span>Sample</span></a></li>
      </ul>


    );
  }
});

module.exports = Playlists;
