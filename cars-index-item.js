// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { Link } from 'react-router-dom'
import { Panel } from 'react-bootstrap'

// components
import { CarActions } from '../car-actions/car-actions'
import { Stars } from '../../../components/shared/stars/stars'

export function CarsIndexItem(props) {
  return (const { car } = props

    return (
      <Panel className='car'>
        <div className='car-details'>
          <Link to={`/cars/${car.id}`}>
            <div className='car-details__name'>{car.full_name}</div>
          </Link>
          <div className='car-details__places'>{car.places_full}</div>
          <Stars stars={car.comfort_stars} label={car.comfort} />
          {this.renderCarsActions());
}
