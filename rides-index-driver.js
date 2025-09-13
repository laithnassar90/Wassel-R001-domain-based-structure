// utils
import React from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { autobind } from 'core-decorators'
import { Link } from 'react-router-dom'
import { Button, Col } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'

// actions
import { fetchRidesAsDriver } from '../../actions/rides'

// components
import { AsyncContent } from '../../../components/shared/async-content/async-content'
import { RidesIndexSimpleItem } from '../../components/rides-index-simple-item/rides-index-simple-item'

const per = 10

function RidesIndexDriver(props) {
  React.useEffect(() => {
    const { fetchRidesAsDriver, currentUserId
  }, []);
  return (return (
      <div className='show-grid'>
        <div className='rides'>
          {this.renderRidesMain());
}
const mapStateToProps = (state) => {
  return {
    isStarted: state.ridesDriver.isStarted,
    isFetching: state.ridesDriver.isFetching,
    rides: state.ridesDriver.items,
    pagination: state.ridesDriver.pagination,
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = {
  fetchRidesAsDriver
}

export default connect(mapStateToProps, mapDispatchToProps)(RidesIndexDriver)
