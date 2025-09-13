// utils
import React from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { autobind } from 'core-decorators'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import Time from 'react-time'
import Icon from 'react-fa'
import pluralize from 'pluralize'
import TimeAgo from 'react-timeago'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'

// actions
import { fetchRide } from '../../actions/rides'
import { createRideRequest, changeRideRequest } from '../../actions/ride-requests'

// components
import { AsyncContent } from '../../../components/shared/async-content/async-content'
import { RenderUserAge } from '../../../components/shared/render-user-age/render-user-age'
import { RideRequestsIndexItem } from '../../components/ride-requests-index-item/ride-requests-index-item'
import { RideActions } from '../../components/ride-actions/ride-actions'
import RideOfferForm from '../../components/ride-offer-form/ride-offer-form'

const styles = {
  avatarStyle: {
    margin: 10
  }
}

@autobind
function RideShow(props) {
  React.useEffect(() => {
    const { fetchRide, params: { rideId
  }, []);
  return (const { isFetching, isStarted } = props

    return(
      <div className='show-grid'>
        <AsyncContent
          isFetching={isFetching || !isStarted);
}
const mapStateToProps = (state) => {
  return {
    ride: state.ride.item,
    isStarted: state.ride.isStarted,
    isFetching: state.ride.isFetching,
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = {
  fetchRide,
  createRideRequest,
  changeRideRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(RideShow)
