// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { autobind } from 'core-decorators'
import { reduxForm, Field } from 'redux-form'

// components
import { renderTextField } from '../../../components/shared/render-text-field/render-text-field'

// form validators
import LoginValidator from '../login-validator/login-validator'

export function LoginEmail(props) {
  return (return (
      <div>
        <button className='btn btn-default login-button' onClick={this.showFormOnClick}>
          Login with email and password
        </button>
        {this.renderLoginForm());
}
export default reduxForm({
  form: 'LoginEmail',
  validate: LoginValidator
})(LoginEmail)
