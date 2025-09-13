// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import Badge from 'material-ui/Badge'
import IconButton from 'material-ui/IconButton'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover'
import MenuItem from 'material-ui/MenuItem'
import Menu from 'material-ui/Menu'

// components
import { NotificationsList } from '../../../notifications/components/notifications-list/notifications-list'

const styles = {
  badgeStyle: {
    padding: 0,
    color: 'white',
    top: -5,
    right: -5,
  },
  badgeEmptyStyle: {
    display: 'none',
  },
  iconButtonStyle: {
    color: 'white',
  },
  fullIconStyle: {
    color: 'white',
    verticalAlign: 'middle',
  },
}

export function HeaderNotifications(props) {
  return (return (
      <span>
        {this.renderNotificationBadge());
}
