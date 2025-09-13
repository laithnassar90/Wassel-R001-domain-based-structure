// utils
import React from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { autobind } from 'core-decorators'
import { Col } from 'react-bootstrap'
import { browserHistory } from 'react-router-dom'

// actions
import { fetchRidesOptions, createRide } from '../../actions/rides'

// components
import RideForm from '../../components/ride-form/ride-form'

export function RideNew(props) {
  React.useEffect(() => {
    const { fetchRidesOptions
  }, []);
  return (const { rideOptions } = props

    return (
      <div className='show-grid'>
        <Col xs={12}>
          <div className='heading'>
            <div className='heading-title'>New ride</div>
          </div>
          <RideForm
            rideOptions={rideOptions);
}
const mapStateToProps = (state) => {
  return {
    rideOptions: state.rideOptions
  }
}

const mapDispatchToProps = {
  fetchRidesOptions,
  createRide,
}

export default connect(mapStateToProps, mapDispatchToProps)(RideNew)
