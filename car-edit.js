// utils
import React from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { autobind } from 'core-decorators'
import _ from 'underscore'
import { Col } from 'react-bootstrap'
import { browserHistory } from 'react-router-dom'

// actions
import { fetchCarsOptions, fetchCar, updateCar } from '../../actions/cars'

// components
import { AsyncContent } from '../../../components/shared/async-content/async-content'
import CarForm from '../../components/car-form/car-form'

export function CarEdit(props) {
  React.useEffect(() => {
    const { fetchCar, fetchCarsOptions, params: { carId
  }, []);
  return (const { isStarted, isFetching } = props

    return (
      <div className='show-grid'>
        <Col xs={12}>
          <div className='heading'>
            <div className='heading-title'>Edit car</div>
          </div>
          <AsyncContent
            isFetching={isFetching || !isStarted);
}
const mapStateToProps = (state) => {
  return {
    car: state.car.item,
    isStarted: state.car.isStarted,
    isFetching: state.car.isFetching,
    carOptions: state.carOptions,
  }
}

const mapDispatchToProps = {
  fetchCarsOptions,
  fetchCar,
  updateCar,
}

export default connect(mapStateToProps, mapDispatchToProps)(CarEdit)
