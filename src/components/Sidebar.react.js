import React from 'react/addons';
import Router from 'react-router';
import Isvg from 'react-inlinesvg';


var Sidebar = React.createClass({
  componentWillMount: function () {
    this.start = Date.now();
  },
  render: function () {
    return (



      <ul className="sidebar">
        <div className="nav-profile">
          <div className="nav-profile-picture pull-left">
            <img id="sideBarAvatar" src="images/avatar.png" className="img-circle profile-picture"/>
          </div>
          <div className="nav-username pull-left">AurousUser</div>
          <div className="nav-settings pull-right">
            <button type="button" className="btn btn-transparent" data-toggle="modal" data-target="#modalSettings"><i className="material-icons">settings</i></button>
          </div>
        </div>

        <Router.Link to="dashboard">
          <li>
            <p>Dashboard</p>
          </li>
        </Router.Link>
        <Router.Link to="preferences">
          <li>
            <p>Preferences</p>
          </li>
        </Router.Link>
        <Router.Link to="about">
          <li>
            <p>About</p>
          </li>
        </Router.Link>
      </ul>
    );
  }
});

module.exports = Sidebar;
