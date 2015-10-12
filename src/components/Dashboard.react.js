import React from 'react/addons';
import Router from 'react-router';
import Settings from '../utils/SettingsUtil';
import utils from '../utils/Util';

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
      <div className='content-scroller' id='content'>
        <section>
          
        </section>
      </div>
        );

    }

});


module.exports = Dashboard;