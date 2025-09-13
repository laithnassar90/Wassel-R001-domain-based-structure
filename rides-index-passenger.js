// utils
import React from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { autobind } from 'core-decorators'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'

// actions
import { fetchRidesAsPassenger } from '../../actions/rides'

// components
import { AsyncContent } from '../../../components/shared/async-content/async-content'
import { RidesIndexItem } from '../../components/rides-index-item/rides-index-item'

const per = 10

function RidesIndexPassenger(props) {
  React.useEffect(() => {
    const { fetchRidesAsPassenger, currentUserId
  }, []);
  return (return (
      <div className='show-grid'>
        <div className='rides'>
          {this.renderRidesMain());
}
const mapStateToProps = (state) => {
  return {
    rides: state.ridesPassenger.items,
    isStarted: state.ridesPassenger.isStarted,
    isFetching: state.ridesPassenger.isFetching,
    pagination: state.ridesPassenger.pagination,
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = {
  fetchRidesAsPassenger
}

export default connect(mapStateToProps, mapDispatchToProps)(RidesIndexPassenger)
