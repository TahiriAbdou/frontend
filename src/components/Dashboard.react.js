import React from 'react/addons';
import Router from 'react-router';
import Settings from '../utils/SettingsUtil';
import utils from '../utils/Util';
import _ from 'lodash';
import Featured from './FeaturedSongs.react';
import Search from './SearchSongs.react';
import LazyLoad from 'react-lazy-load';


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
           searchQuery: false
        };
    },
    handleSearchChange: function(event) {
        var value = (event.target.value !== '') ? event.target.value : false;
        this.setState({
            searchQuery: value
        });
    },
    render: function() {
        return (
            <div id="discover">
                <form id="search-form">
                    <div className="input-group">
                        <input id="searchbar" type="text" className="form-control" onChange={this.handleSearchChange} placeholder="Search for song or import URL"/>
                            <span className="input-group-btn">
                                <button className="btn btn-primary" type="button" id="btn-search"><i className="fa fa-search"></i></button>
                            </span>
                    </div>
                </form>
                <If test={!this.state.searchQuery}>
                    <LazyLoad>
                        <Featured />
                    </LazyLoad>
                </If>
                <If test={this.state.searchQuery}>
                    <LazyLoad>
                       <Search value={this.state.searchQuery} />
                    </LazyLoad>
                </If>
            </div>
        );

    }

});


module.exports = Dashboard;