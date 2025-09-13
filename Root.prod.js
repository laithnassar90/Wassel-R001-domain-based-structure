// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { rootRoutes } from '../routes'

export default function Root(props) {
  return (const { store, history } = props
    const routes = createRoutes(store)

    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={history} routes={rootRoutes} />
        </Provider>
      </MuiThemeProvider>
    ));
}
