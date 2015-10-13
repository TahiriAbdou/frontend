import React from 'react/addons';
import Router from 'react-router';

var Playlists = React.createClass({
  render: function () {
    return (
<div>
<ul id="playlistContainer" className="nav nav-playlist">
        <li className="nav-title"><div className="pull-right"><a><i className="material-icons">chevron_right</i></a></div>PLAYLIST</li>

        <li className="playlist-study"><a ><i className="material-icons">play_arrow</i><span>Study</span></a></li>
         <li className="playlist-study"><a ><i className="material-icons">play_arrow</i><span>Sample</span></a></li>
      </ul>
      <ul className="nav nav-playlist">
                 <li><a ><i className="material-icons">play_arrow</i><span>Night Rider</span></a></li>
                <li className="addNewPlaylist"><a  data-toggle="modal" data-target="#modalAddPlaylist"><i className="material-icons">add</i><span>New playlist</span></a></li>
      

            </ul>
</div>
    );
  }
});

module.exports = Playlists;
