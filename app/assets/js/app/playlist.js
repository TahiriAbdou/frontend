/**
 * Created by Andrew on 9/12/2015.
 */
var playlist = {

    scanPaths: '',
    scanningActive: false,
    scanFilters: '',

    addToPlaylist: function() {
        mediaScanner.scanningActive = true;
        scanMedia();

    },
    completeScanning: function() {
        mediaScanner.scanningActive = false;
        alertify.success("Media Scanned from Disk");
    }
};