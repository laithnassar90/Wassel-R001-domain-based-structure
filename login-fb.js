// utils
import React from 'react';
import PropTypes from 'prop-types';import { autobind } from 'core-decorators'

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments) } }
var data = {}

export function LoginFb(props) {
  React.useEffect(() => {
    var appId, version
        if (__DEVELOPMENT__) {
          appId = '116661262005772'
          version = 'v2.3'
  }, []);
  return (return (
      <div>
        <button className='btn btn-primary login-button' onClick={this.loginWithFacebook}>
          Login with facebook
        </button>
      </div>
    ));
}
