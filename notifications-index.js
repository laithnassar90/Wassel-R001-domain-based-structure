// utils
import React from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { autobind } from 'core-decorators'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'

// actions
import { fetchNotifications, markNotificationAsSeen } from '../../actions/notifications'

// components
import { AsyncContent } from '../../../components/shared/async-content/async-content'
import { NotificationsItem } from '../../components/notifications-item/notifications-item'

const per = 10

export function NotificationsIndex(props) {
  React.useEffect(() => {
    const { isAuthenticated, fetchNotifications
  }, []);
  return (return (
      <div className='show-grid'>
        <div className='notifications'>
          {this.renderNotificationsMain());
}
const mapStateToProps = (state) => {
  return {
    notifications: state.notifications.items,
    isStarted: state.notifications.isStarted,
    isFetching: state.notifications.isFetching,
    pagination: state.notifications.pagination,
    isAuthenticated: state.session.isAuthenticated,
  }
}

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsSeen
}


export default connect(mapStateToProps, mapDispatchToProps)(NotificationsIndex)
