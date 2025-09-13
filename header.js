// utils
import React, {, Component} from 'react';
import PropTypes from 'prop-types';import AppBar from 'material-ui/AppBar'

// components
import { AppNavDrawer } from '../../app-nav-drawer'
import { HeaderRight } from '../header-right/header-right'

export function Header(props) {
  return (const { containerWidth, currentUser, isAuthenticated, isStarted, isFetching } = props
    const title = 'Wassel'
    let docked = false
    let showMenuIconButton = true
    let { navDrawerOpen } = state

    if (containerWidth > 992) {
      docked = true
      navDrawerOpen = true
      showMenuIconButton = false);
}
