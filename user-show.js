// utils
import React from 'react';
import PropTypes from 'prop-types';import { connect } from 'react-redux';
import { Col } from 'react-bootstrap'
import Time from 'react-time'
import Icon from 'react-fa'
import Avatar from 'material-ui/Avatar'

// actions
import { fetchUser } from '../../actions/users';

// components
import { AsyncContent } from '../../../components/shared/async-content/async-content'
import { RenderUserAge } from '../../../components/shared/render-user-age/render-user-age'
import { CarsIndexItem } from '../../../cars/components/cars-index-item/cars-index-item'
import { RidesIndexSimpleItem } from '../../../rides/components/rides-index-simple-item/rides-index-simple-item'

export function UserShow(props) {
  React.useEffect(() => {
    const { fetchUser, params: { userId
  }, []);
  return (const { isStarted, isFetching } = props

    return (
      <div className='show-grid'>
        <AsyncContent
          isFetching={isFetching || !isStarted);
}
const mapStateToProps = (state) => {
  return {
    user: state.user.item,
    isStarted: state.user.isStarted,
    isFetching: state.user.isFetching,
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = {
  fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
