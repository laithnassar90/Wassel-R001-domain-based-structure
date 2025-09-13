// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { autobind } from 'core-decorators'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

// components
import { RideRequestCreated } from './notifications-item-ride-request-created'
import { RideRequestUpdated } from './notifications-item-ride-request-updated'

export function NotificationsItem(props) {
  return (const { notification } = props

    return (
      <div
        className={classNames('header__notification', {'header__notification--seen' : notification.seen_at}));
}
