/**
 * Created by Andrew on 10/9/2015.
 */
var versionChecker = {
    version: 0.1,
    api: "https://aurous.me/api/version/",
    checkForUpdate: function() {
        $.getJSON(versionChecker.api, function(data) {
            if (data != null) {
              if (versionChecker.version < data.version) {
                  // confirm dialog
                  alertify.confirm("<strong>Update Alert</strong><br>A new version of Aurous is available.", function (e) {
                      if (e) {
                          if (typeof openUrl == 'function') {
                              openUrl(data.moreInfo);
                          }
                      } else {

                      }
                  });
              } else {
                  console.log("up-to-date");
              }
            }
        });
    }
};