// utils
import React from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux';
import { autobind } from 'core-decorators'
import { Col } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import List from 'material-ui/List/List'

// actions
import { fetchUsers } from '../../actions/users';

// components
import { AsyncContent } from '../../../components/shared/async-content/async-content'
import { UsersIndexItem } from '../../components/users-index-item/users-index-item'

const per = 10

function UsersIndex(props) {
  React.useEffect(() => {
    const { fetchUsers
  }, []);
  return (return(
      <List className='users'>
        {this.renderUsersMain());
}
const mapStateToProps = (state) => {
  return {
    users: state.users.items,
    isStarted: state.users.isStarted,
    isFetching: state.users.isFetching,
    pagination: state.users.pagination,
  }
}

const mapDispatchToProps = {
  fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex)
