import React from 'react/addons';
import Router from 'react-router';
import Settings from '../utils/SettingsUtil';
import utils from '../utils/Util';
import Featured from './FeaturedSongs.react';


let If = React.createClass({
    render: function() {
        if (this.props.test) {
            return this.props.children;
        } else {
            return false;
        }
    }
});


var Dashboard = React.createClass({
    mixins: [Router.Navigation],

    getInitialState: function() {
        return {
           
        };
    },
    
    render: function() {
        return (
     <div id="discover">
                            <form id="search-form">
                                <div className="input-group">
                                    <input id="searchbar" type="text" className="form-control" placeholder="Search for song or import URL"/>
                                            <span className="input-group-btn">
                                                <button className="btn btn-primary" type="button" id="btn-search"><i className="fa fa-search"></i></button>
                                            </span>
                                </div>
                            </form>
<Featured />





     </div>
        );

    }

});


module.exports = Dashboard;