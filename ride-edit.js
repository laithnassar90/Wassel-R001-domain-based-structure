// utils
import React from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { autobind } from 'core-decorators'
import { Col } from 'react-bootstrap'
import { browserHistory } from 'react-router-dom'

// actions
import { fetchRidesOptions, fetchRide, updateRide } from '../../actions/rides'

// components
import { AsyncContent } from '../../../components/shared/async-content/async-content'
import RideForm from '../../components/ride-form/ride-form'

export function RideEdit(props) {
  React.useEffect(() => {
    const { fetchRidesOptions, fetchRide, params: { rideId
  }, []);
  return (const { isStarted, isFetching } = props

    return (
      <div className='show-grid'>
        <Col xs={12}>
          <div className='heading'>
            <div className='heading-title'>Edit ride</div>
          </div>
          <AsyncContent
            isFetching={isFetching || !isStarted);
}
const mapStateToProps = (state) => {
  return {
    ride: state.ride.item,
    isStarted: state.ride.isStarted,
    isFetching: state.ride.isFetching,
    rideOptions: state.rideOptions,
  }
}

const mapDispatchToProps = {
  fetchRidesOptions,
  fetchRide,
  updateRide,
}

export default connect(mapStateToProps, mapDispatchToProps)(RideEdit)
