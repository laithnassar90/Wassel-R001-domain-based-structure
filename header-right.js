// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import ContentAddBox from 'material-ui/svg-icons/content/add-box'
import IconButton from 'material-ui/IconButton'
import ActionSearch from 'material-ui/svg-icons/action/search'

// components
import { HeaderNotifications } from '../header-notifications/header-notifications'

const styles = {
  button: {
    marginLeft: 10,
    marginRight: 10,
    verticalAlign: 'super',
  },
  loginButton: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    verticalAlign: 'sub',
  },
  searchButton: {
    verticalAlign: 'middle',
    color: 'white',
    minWidth: 40,
  },
  badgeStyle: {
    padding: 0,
    color: 'white',
    top: -5,
    right: -5,
  },
  iconButtonStyle: {
    color: 'white',
  },
  iconStyle: {
    verticalAlign: 'middle',
  },
}

export function HeaderRight(props) {
  return (return(
      <div>
        {this.renderHeaderRight());
}
