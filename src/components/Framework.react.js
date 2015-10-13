import _ from 'lodash';
import React from 'react';
import Router from 'react-router';
import Sidebar from './Sidebar.react';
import Header from './Header.react';

var Client = React.createClass({

  getInitialState: function () {
    return {
      sidebarOffset: 0
    };
  },

  handleScroll: function (e) {
    if (e.target.scrollTop > 0 && !this.state.sidebarOffset) {
      this.setState({
        sidebarOffset: e.target.scrollTop
      });
    } else if (e.target.scrollTop === 0 && this.state.sidebarOffset) {
      this.setState({
        sidebarOffset: 0
      });
    }
  },

  
  render: function () {
    return (
      <div className="wrapper">
          <Sidebar />
          <div className="main">
            <div className="container-fluid">
              <div className="col-xs-12">
                <Header />
                <Router.RouteHandler />
              </div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = Client;
