// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import List from 'material-ui/List/List'
import { Link } from 'react-router-dom'

// components
import { NotificationsItem } from '../notifications-item/notifications-item'

export function NotificationsList(props) {
  return (return (
      <div>
        <div className='header__notifications__header'>
          Notifications
        </div>
        {this.renderNotificationsItems());
}
