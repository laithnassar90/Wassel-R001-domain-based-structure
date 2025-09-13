// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { autobind } from 'core-decorators'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { Col } from 'react-bootstrap'

// actions
import { updateCurrentUser } from '../../actions/users'

// components
import UserEditForm from '../../components/user-edit-form/user-edit-form'

export function UserEdit(props) {
  return (const { currentUser } = props

    return (
      <div className='show-grid'>
        <Col xs={12}>
          <div className='heading'>
            <div className='heading-title'>My profile</div>
          </div>
          <UserEditForm
            currentUser={currentUser);
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.item
  }
}

const mapDispatchToProps = {
  updateCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)
