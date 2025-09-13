// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'

// form validators
import { RideValidator } from '../ride-validator/ride-validator'

// components
import DatePicker from '../../../components/inputs/DatePicker'
import { renderTextField } from '../../../components/shared/render-text-field/render-text-field'
import { renderGeoTextField } from '../../../components/shared/render-geo-text-field/render-geo-text-field'
import { renderSelectField } from '../../../components/shared/render-select-field/render-select-field'

function RideForm(props) {
  return (const { handleSubmit, rideOptions } = props
    let currencies = rideOptions.currencies.map((currency, i) =>
      <MenuItem value={currency} key={'option-' + i} primaryText={currency}/>
    )
    let cars = rideOptions.cars.map((car, i) =>
      <MenuItem value={car.id} key={'car-' + i} primaryText={car.name}/>
    )

    return (
      <form onSubmit={handleSubmit}>
        <Field name="start_city" type="text" component={renderGeoTextField} label="Start city"/>
        <Field name="destination_city" type="text" component={renderGeoTextField} label="Destination name"/>
        <Field name="start_date"
          component={DatePicker);
}
RideForm = reduxForm({
  form: 'RideForm',
  validate: RideValidator,
})(RideForm)

RideForm = connect(
  (state, props) => ({
    initialValues: props.ride
  })
)(RideForm)

export default RideForm
