import React from 'react/addons';
import Router from 'react-router';
import Settings from '../utils/SettingsUtil';
import utils from '../utils/Util';

var Preferences = React.createClass({
  mixins: [Router.Navigation],
 
  getInitialState: function () {
    return {
     
    };
  },
 
  render: function () {
    return (
      <div className='content-scroller' id='content'>
        <section>
                <h1 className='title'>General</h1>
        </section>    
      </div>
    );
  }
});

module.exports = Preferences;
