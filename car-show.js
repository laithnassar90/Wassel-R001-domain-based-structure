// utils
import React from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap'

// actions
import { fetchCar } from '../../actions/cars';

// components
import { AsyncContent } from '../../../components/shared/async-content/async-content'
import { Stars } from '../../../components/shared/stars/stars'
import { CarActions } from '../../components/car-actions/car-actions'

function CarShow(props) {
  React.useEffect(() => {
    const { fetchCar, params: { carId
  }, []);
  return (const { isFetching, isStarted } = props

    return (
      <Grid className='car'>
        <AsyncContent
          isFetching={isFetching || !isStarted);
}
const mapStateToProps = (state) => {
  return {
    car: state.car.item,
    isStarted: state.car.isStarted,
    isFetching: state.car.isFetching,
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = {
  fetchCar
}

export default connect(mapStateToProps, mapDispatchToProps)(CarShow)
