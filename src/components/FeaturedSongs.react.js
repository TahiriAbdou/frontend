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


var Featured = React.createClass({
    mixins: [Router.Navigation],

    getInitialState: function() {
        return {
           
        };
    },
    
    render: function() {
        var fistThStyle = {
            width: '75px'
        };
         var SecondThStyle = {
            width: '120p'
        }

        return (
        <div id="discoverIntro">
                                <h2>Featured Songs</h2>
                                <div className="result" id="top-result">
                                    <table id="topSongsTable" className="table table-hover display">
                                        <thead>
                                        <tr>
                                            <th style={fistThStyle}></th>
                                            <th style={SecondThStyle}></th>
                                            <th>SONG</th>
                                            <th>ARTIST</th>
                                            <th>ALBUM</th>
                                            <th><i className="material-icons">access_time</i></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr data-song-name="Obenhaus - Gotta" data-artist-name="Goiko Obenhaus" data-album-art="https://i1.sndcdn.com//artworks-000115464710-6br5gk-t500x500.jpg" data-id="0" data-value="https://aurous.me/featured/1.mp3">
                                            <td><img src="https://i1.sndcdn.com//artworks-000115464710-6br5gk-t500x500.jpg" /></td>
                                            <td className="result-control">
                                                <button className="btn btn-transparent control-show"><a href="#"><i className="material-icons">add</i></a></button>
                                                <button className="btn btn-transparent control-show"><a href="#" data-jq-dropdown="#dropdown"><i className="material-icons">more_horiz</i></a></button>
                                                <button className="btn btn-transparent"><a href="#"><i id="discover-row-icon-0" className="material-icons">play_arrow</i></a></button>
                                            </td>
                                            <td>Obenhaus - Gotta</td>
                                            <td>Goiko Obenhaus</td>
                                            <td>Obenhaus EP</td>
                                            <td>4:40</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
        );

    }

});


module.exports = Featured;