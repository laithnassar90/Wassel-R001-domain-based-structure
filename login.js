// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { autobind } from 'core-decorators'
import { Col, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { browserHistory } from 'react-router-dom'

// actions
import { logInEmailBackend, logInFbBackend, saveToLocalStorage } from '../../actions/session'
import { APIEndpoints, ActionCableURL } from '../../../constants/constants'
import { fetchCurrentUser } from '../../../users/actions/users'
import { fetchNotifications } from '../../../notifications/actions/notifications'

// components
import { LoginFb } from '../../components/login-fb/login-fb'
import LoginEmail from '../../components/login-email/login-email'

function Login(props) {
  return (const { logInFbBackend, errors } = props

    return (
      <div className="show-grid">
        <div className="background clearfix"></div>

        <div className="login-errors">
          <Col xs={12} md={8} mdOffset={2}>
            {this.renderFormErrors());
}
const mapStateToProps = (state) => {
  return {
    errors: state.session.errors,
    isFetching: state.session.isFetching,
    isAuthenticated: state.session.isAuthenticated,
  }
}

const mapDispatchToProps = {
  logInEmailBackend,
  logInFbBackend,
  fetchCurrentUser,
  fetchNotifications,
  saveToLocalStorage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
