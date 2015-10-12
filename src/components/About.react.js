import React from 'react/addons';
import Router from 'react-router';
import utils from '../utils/Util';
import fs from 'fs';
import path from 'path';

var About = React.createClass({
    mixins: [Router.Navigation],

    render: function() {
        var Contributors = [
            {
                name: 'Luigi Poole',
                email: 'luigipoole@outlook.com',
                github: 'luigiplr'
            }
        ];
        return (
        <div className="content-scroller" id="content">
        <section>
                <h1 className="title">About</h1>
                <p className="about" >This is a prototype developer build, and is not representative of the final product.</p>
                <br/>
               
               
        </section>
     
      </div>
        );
    }
});

module.exports = About;