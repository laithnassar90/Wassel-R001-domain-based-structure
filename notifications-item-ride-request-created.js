import React, {} from 'react';
import PropTypes from 'prop-types';import { Link } from 'react-router-dom'
import Timestamp from 'react-time'
import TimeAgo from 'react-timeago'

export const RideRequestCreated = ({ notification }) => {
  if (!notification.sender || !notification.ride) {
    return (
      <div className='header__notification__body'>
        Invalid notification data
      </div>
    )
  }

  return (
    <div className='header__notification__body'>
      <Link to={`/users/${notification.sender.id}`} className='header__notification__link'>
        {notification.sender.full_name}
      </Link>
      {' added ride request for your ride '}
      <Link to={`/rides/${notification.ride.id}`} className='header__notification__link'>
        {notification.ride.start_city} - {notification.ride.destination_city} {'on '}
        <Timestamp value={notification.ride.start_date} format="dddd DD MMMM - HH:mm" />
      </Link>
      <TimeAgo className='header__notification__timestamp' date={notification.created_at} />
    </div>
  )
}

RideRequestCreated.propTypes = {
  notification: PropTypes.object.isRequired
}
