import React from 'react/addons';
import Router from 'react-router';
import Playlist from './Playlists.react';


var Sidebar = React.createClass({
  componentWillMount: function () {
    this.start = Date.now();
  },
  render: function () {
    return (
      <div className="sidebar">
        <div className="nav-sidebar">
        <div className="nav-profile">
          <div className="nav-profile-picture pull-left">
            <img id="sideBarAvatar" src="images/avatar.png" className="img-circle profile-picture"/>
          </div>
          <div className="nav-username pull-left">AurousUser</div>
          <div className="nav-settings pull-right">
          <Router.Link to="preferences">
            <button type="button" className="btn btn-transparent" data-toggle="modal" data-target="#modalSettings"><i className="material-icons">settings</i></button>
          </Router.Link>
          </div>
        </div>
        <ul className="nav nav-menu">
        <Router.Link to="dashboard">
                <li id="nav-discover">
                    <a><i className="material-icons">search</i><span>Discover</span>
                    </a>
                </li>
        </Router.Link>
        <Router.Link to="mycollection">
                <li id="nav-collection">
                    <a ><i className="material-icons">queue_music</i><span>My Collection</span>
                    </a>
                </li>
        </Router.Link>
        </ul>
      </div>
        </div>
    );
  }
});

module.exports = Sidebar;
