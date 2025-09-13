// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { autobind } from 'core-decorators'
import pluralize from 'pluralize'
import TimeAgo from 'react-timeago'
import RaisedButton from 'material-ui/RaisedButton'

export function RideRequestsIndexItem(props) {
  return (const { ride_request } = props

    return (
      <div className='ride-request'>
        <div className='ride-request__status'>
          <div className={'ride-request__status--' + ride_request.status}>{ride_request.status}</div>
        </div>
        <div className='ride-request__info'>
          <div className='ride-request__passenger'>{state.ride_request.passenger.full_name}</div>
          <div className='ride-request__places'>
            <div className='ride-request__places-value'>{state.ride_request.places}</div>
            <div className='ride-request__places-label'>{pluralize('place', state.ride_request.places)}</div>
          </div>
          <div className='ride-request__created'><TimeAgo date={state.ride_request.created_at} /></div>
        </div>
        {this.renderRideRequestsButtons());
}
