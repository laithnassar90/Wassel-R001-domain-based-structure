import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'

export const LoadingSpinner = ({ size = 40, message = 'Loading...' }) => (
  <div className="loading-spinner">
    <CircularProgress size={size} />
    {message && <p className="loading-message">{message}</p>}
  </div>
)

LoadingSpinner.propTypes = {
  size: PropTypes.number,
  message: PropTypes.string
}