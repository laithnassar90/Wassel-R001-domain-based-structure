// utils
import React from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { autobind } from 'core-decorators'
import { Col } from 'react-bootstrap'
import { browserHistory } from 'react-router-dom'

// actions
import { fetchCarsOptions, createCar, initializeCar } from '../../actions/cars'

// components
import CarForm from '../../components/car-form/car-form'

export function CarNew(props) {
  React.useEffect(() => {
    const { fetchCarsOptions, initializeCar
  }, []);
  return (return (
      <div className='show-grid'>
        <Col xs={12}>
          <div className='heading'>
            <div className='heading-title'>New car</div>
          </div>
          {this.renderCarForm());
}
const mapStateToProps = (state) => {
  return {
    carOptions: state.carOptions
  }
}

const mapDispatchToProps = {
  fetchCarsOptions,
  createCar,
  initializeCar,
}

export default connect(mapStateToProps, mapDispatchToProps)(CarNew)
