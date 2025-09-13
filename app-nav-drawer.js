import React, {Component} from 'react';
import PropTypes from 'prop-types';import Drawer from 'material-ui/Drawer'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { spacing, typography, zIndex } from 'material-ui/styles'
import { blue600, blue700 } from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import ContentAddBox from 'material-ui/svg-icons/content/add-box'
import ActionSearch from 'material-ui/svg-icons/action/search'
import ActionAccountBox from 'material-ui/svg-icons/action/account-box'
import SocialGroup from 'material-ui/svg-icons/social/group'
import MapsDirectionsCar from 'material-ui/svg-icons/maps/directions-car'
import DriverIcon from './icons/DriverIcon'
import PassengerIcon from './icons/PassengerIcon'
import Delete from 'material-ui/svg-icons/action/delete'
import MenuItem from 'material-ui/MenuItem'
import Avatar from 'material-ui/Avatar'
import { Link } from 'react-router-dom'

const SelectableList = makeSelectable(List);

const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 20,
    color: '#1a202c',
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: 700,
    background: 'white',
    paddingLeft: spacing.desktopGutter,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 0,
    borderBottom: '1px solid #e2e8f0',
    fontFamily: 'Inter, Roboto, sans-serif'
  },
  avatatStyle: {
    marginRight: 12,
    width: 32,
    height: 32
  },
  logoImage: {
    height: '28px',
    marginRight: '12px',
    verticalAlign: 'middle'
  },
  drawer: {
    width: 280,
    background: 'white',
    borderRight: '1px solid #e2e8f0',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.05)'
  }
}

export function AppNavDrawer(props) {
  return (const {
      location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      onLogout,
      open,
      style,
    } = props;

    return (
      <Drawer
        style={style);
}
