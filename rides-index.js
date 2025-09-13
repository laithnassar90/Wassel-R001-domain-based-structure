// utils
import React from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { autobind } from 'core-decorators'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import Button from 'react-bootstrap/lib/Button'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Chip from 'material-ui/Chip'

// actions
import { fetchRides, loadSearchFormData } from '../../actions/rides'
import { PAGINATION } from '../../../constants/app-constants'

// components
import { AsyncContent } from '../../../components/shared/async-content/async-content'
import { RidesIndexItem } from '../../components/rides-index-item/rides-index-item'
import RideSearch from '../../components/ride-search/ride-search'
import RideFilters from '../../components/ride-filters/ride-filters'

const per = PAGINATION.DEFAULT_PER_PAGE

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}

export function RidesIndex(props) {
  React.useEffect(() => {
    const { loadSearchFormData, fetchRides, location: { query
  }, []);
  return (return (
      <div className='show-grid'>
        <div className='rides'>
          {this.renderRidesMain());
}
const mapStateToProps = (state) => {
  return {
    rides: state.rides.items,
    isStarted: state.rides.isStarted,
    isFetching: state.rides.isFetching,
    pagination: state.rides.pagination,
    filters: state.rides.filters,
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = {
  loadSearchFormData,
  fetchRides,
}

export default connect(mapStateToProps, mapDispatchToProps)(RidesIndex)
