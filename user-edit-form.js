// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import Dropzone from 'react-dropzone'

// form validators
import { UserEditValidator } from '../user-edit-validator/user-edit-validator'
import { asyncValidate } from '../async-email-validate/async-email-validate'

// components
import DatePicker from '../../../components/inputs/DatePicker'
import { renderTextField } from '../../../components/shared/render-text-field/render-text-field'
import { renderRadioGroup } from '../../../components/shared/render-radio-group/render-radio-group'

export function UserEditForm(props) {
  return (const { handleSubmit } = props;

    return (
      <form onSubmit={handleSubmit}>
        <Field name="first_name" type="text" component={renderTextField} label="First name *"/>
        <Field name="last_name" type="text" component={renderTextField} label="Last name *"/>
        <Field name="email" type="text" component={renderTextField} label="Email *"/>
        <div>
          <Field name="gender" component={renderRadioGroup}>
            <RadioButton value="male" label="male"/>
            <RadioButton value="female" label="female"/>
          </Field>
        </div>
        <Field name="tel_num" type="text" component={renderTextField} label="Tel num"/>
        <Field name="date_of_birth"
          component={DatePicker);
}
UserEditForm = reduxForm({
  form: 'UserEditForm',
  validate: UserEditValidator,
  asyncValidate,
  asyncBlurFields: ['email']
})(UserEditForm)

UserEditForm = connect(
  (state, props) => ({
    initialValues: props.currentUser
  })
)(UserEditForm)

export default UserEditForm
