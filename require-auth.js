import React, {Component} from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { push } from 'react-router-redux'

export default function requireAuth(ChildComponent) {
  function AuthenticatedComponent(props) {
  return (return (
        <div>
         { props.isAuthenticated === true ? <ChildComponent { ...props } /> : null);
}
