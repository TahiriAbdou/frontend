import React from 'react/addons';
import Router from 'react-router';

let If = React.createClass({
    render: function() {
        if (this.props.test) {
            return this.props.children;
        } else {
            return false;
        }
    }
});


var Header = React.createClass({
    mixins: [Router.Navigation],

    getInitialState: function() {
        return {

        };
    },

    render: function() {
        return (
                    <div id="titlebar">
                        <nav className="navbar navbar-inverse navbar-fixed-top">
                            <div className="container-fluid">
                                <div className="navbar-brand">
                                    <img alt="Aurous" src="images/sidebar-logo.png"/>
                                </div>
                                <ul className="nav navbar-nav navbar-right btn-window">
                                    <li><a id="minimize-app" ><img src="images/top-minus.png" /></a></li>
                                    <li><a id="maximize-app" ><img src="images/top-square.png" /></a></li>
                                    <li className="close-app"><a id="close-app"><img src="images/top-close.png" /></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
        );

    }

});


module.exports = Header;