// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import classNames from 'classnames'

// components
import { renderGeoTextField } from '../../../components/shared/render-geo-text-field/render-geo-text-field'
import DatePicker from '../../../components/inputs/DatePicker'

export function RideSearch(props) {
  return (const { handleSubmit } = props

    return (
      <form onSubmit={handleSubmit} className='rides-search'>
        <Field name="start_city" type="text" component={renderGeoTextField} label="Start city"/>
        <Field name="destination_city" type="text" component={renderGeoTextField} label="Destination city"/>
        <Field name="start_date"
          component={DatePicker);
}
RideSearch = reduxForm({
  form: 'RideSearch'
})(RideSearch)

RideSearch = connect(
  state => ({
    initialValues: state.ridesSearch.data
  })
)(RideSearch);

export default RideSearch;
