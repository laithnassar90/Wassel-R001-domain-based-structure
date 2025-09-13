// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { Link } from 'react-router-dom';
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import Icon from 'react-fa'

const tooltipEdit = (
  <Tooltip id='tooltip-edit'>Edit</Tooltip>
)
const tooltipDelete = (
  <Tooltip id='tooltip-delete'>Delete</Tooltip>
)

export function RideActions(props) {
  return (const { rideId } = props

    return (
      <div className='ride-actions'>
        <Link to={`/account/rides_as_driver/${rideId}/edit`}>
          <OverlayTrigger placement='top' overlay={tooltipEdit} delayShow={300} delayHide={150}>
            <Icon name='edit' />
          </OverlayTrigger>
        </Link>
        <OverlayTrigger placement='top' overlay={tooltipDelete} delayShow={300} delayHide={150}>
          <Icon name='trash' />
        </OverlayTrigger>
      </div>
    ));
}
