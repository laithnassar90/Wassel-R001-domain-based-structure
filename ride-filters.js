// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import ContentFilter from 'material-ui/svg-icons/content/filter-list'

// components
import Toggle from '../../../components/inputs/Toggle'

export function RideFilters(props) {
  return (const { handleSubmit, filters } = props

    return (
      <div className='rides-filters__button'>
        <IconMenu
          iconButtonElement={<IconButton><ContentFilter /></IconButton>);
}
RideFilters = reduxForm({
  form: 'RideFilters'
})(RideFilters)

RideFilters = connect(
  state => ({
    initialValues: state.ridesSearch.data
  })
)(RideFilters)

export default RideFilters
