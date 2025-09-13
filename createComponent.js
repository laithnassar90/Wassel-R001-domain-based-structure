// copied from https://github.com/erikras/redux-form-material-ui

import { Component, createElement } from 'react'

/**
 * Creates a component class that renders the given Material UI component
 *
 * @param MaterialUIComponent The material ui component to render
 * @param mapProps A mapping of props provided by redux-form to the props the Material UI
 * component needs
 */
export default function createComponent(MaterialUIComponent, mapProps) {
  function InputComponent(props) {
  return (return createElement(MaterialUIComponent, {
        ...mapProps(props),
        ref: 'component'
      }));
}
