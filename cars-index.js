// utils
import React from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { autobind } from 'core-decorators'
import { Link } from 'react-router-dom'
import { Button, Col } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'

// actions
import { fetchCars } from '../../actions/cars'

// components
import { AsyncContent } from '../../../components/shared/async-content/async-content'
import { CarsIndexItem } from '../../components/cars-index-item/cars-index-item'

const per = 10

function CarsIndex(props) {
  React.useEffect(() => {
    const { fetchCars, currentUserId
  }, []);
  return (return (
      <div className='show-grid'>
        <div className='cars'>
          {this.renderCarsMain());
}
const mapStateToProps = (state) => {
  return {
    cars: state.cars.items,
    isStarted: state.cars.isStarted,
    isFetching: state.cars.isFetching,
    pagination: state.cars.pagination,
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = {
  fetchCars
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex)
