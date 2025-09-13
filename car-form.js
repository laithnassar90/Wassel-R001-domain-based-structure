// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import Dropzone from 'react-dropzone'

// form validators
import { CarValidator } from '../car-validator/car-validator'

// components
import { renderTextField } from '../../../components/shared/render-text-field/render-text-field'
import { renderSelectField } from '../../../components/shared/render-select-field/render-select-field'

export function CarForm(props) {
  return (const { handleSubmit, carOptions } = props
    let colors = carOptions.colors.map((color, i) =>
      <MenuItem value={color} key={'color' + i} primaryText={color} />
    )
    let comforts = carOptions.comforts.map((comfort, i) =>
      <MenuItem value={comfort} key={'comfort' + i} primaryText={comfort} />
    )
    let categories = carOptions.categories.map((category, i) =>
      <MenuItem value={category} key={'category' + i} primaryText={category} />
    )

    return (
      <form onSubmit={handleSubmit}>
        <Field name='brand' type='text' component={renderTextField} label='Brand'/>
        <Field name='model' type='text' component={renderTextField} label='Model'/>
        <Field name='places' type='text' component={renderTextField} label='Places'/>
        <Field name='production_year' type='text' component={renderTextField} label='Production year'/>

        <Field name='color' component={renderSelectField} label='Color'>
          {_.map(colors, (n) => n));
}
CarForm = reduxForm({
  form: 'CarForm',
  validate: CarValidator
})(CarForm)

CarForm = connect(
  (state, props) => ({
    initialValues: props.car
  })
)(CarForm)

export default CarForm
