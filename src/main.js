import '../styles/main.scss';
import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import $script from "scriptjs";

import AppContainer from './containers/AppContainer';
import configureStore from './store/configureStore';
import {APP_EMBED_ELEMENT, GOOGLE_MAPS_API_INLINE} from './constants/Config';

const store = configureStore();

const renderApp = (config) => {
  ReactDOM.render(
    <Provider store={store} >
      <AppContainer config={config}/>
    </Provider>,
    document.getElementById(APP_EMBED_ELEMENT)
  );
};

const init = (configObject) => {
  $script(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_INLINE}&libraries=places`, function() {
    
    if(process.env.NODE_ENV !== 'production') console.log('Start Hcpd with config: ', configObject);

    renderApp(configObject);
  });
};


window.Hcpd_app = {init};

export default init;
