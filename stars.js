// utils
import React, {Component} from 'react';
import PropTypes from 'prop-types';import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import Icon from 'react-fa'

export function Stars(props) {
  return (const { stars, label } = props
    const tooltipComfort = <Tooltip id='tooltip-comfort'>{label}</Tooltip>
    let starsArray = new Array(stars).fill(undefined).map((star, i) =>
      <Icon name='star' key={i} />
    )

    return (
      <OverlayTrigger placement='top' overlay={tooltipComfort} delayShow={300} delayHide={150}>
        <div className='stars'>
          {starsArray);
}
