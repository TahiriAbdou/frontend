import React from 'react';
import webUtil from './utils/WebUtil';
import util from './utils/Util';
import Router from 'react-router';
import routes from './routes';
import routerContainer from './router';


webUtil.addLiveReload();
webUtil.disableGlobalBackspace();

var router = Router.create({
    routes: routes
});

router.run(Handler => React.render( < Handler / > , document.body));
routerContainer.set(router);

router.transitionTo('dashboard');

module.exports = {
    router: router
};