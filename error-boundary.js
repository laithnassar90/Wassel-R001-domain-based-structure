import React, { Component } from 'react'
import PropTypes from 'prop-types'

export function ErrorBoundary(props) {
  return (if (state.hasError) {
      return props.fallback || (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>Please refresh the page or try again later.</p>
        </div>
      ));
}
