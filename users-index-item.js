// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { Link } from 'react-router-dom'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'

export function UsersIndexItem(props) {
  return (const { user } = props

    return (
      <Link to={`/users/${user.id}`} className='user'>
        <ListItem
          leftAvatar={
            <Avatar src={user.avatar} />);
}
