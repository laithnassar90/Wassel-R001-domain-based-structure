// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { Col } from 'react-bootstrap'
import Icon from 'react-fa'
import { browserHistory } from 'react-router-dom'

// actions
import { createUser } from '../../actions/users';

// components
import UserNewForm from '../../components/user-new-form/user-new-form'

export function UserNew(props) {
  return (return (
      <div className='show-grid'>
        <Col xs={12}>
          <div className='heading'>
            <div className='heading-title'>Register</div>
          </div>
          <UserNewForm onSubmit={this.handleSubmit} />
        </Col>
      </div>
    ));
}
const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {
  createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNew)
