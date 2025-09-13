import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withSize } from 'react-sizeme';
import ActionCable from 'actioncable';
import { applyTheme } from '../utils/applyTheme';
import { history } from '../store/configureStore';

// Actions
import { logout } from '../sessions/actions/session';
import { markNotificationAsSeen, userNotificationAdd } from '../notifications/actions/notifications';

// Styles
import '../stylesheets/application.scss'; // Use SCSS

// Components
import { Header } from '../components/header/header/header';
import { ErrorBoundary } from '../components/shared/error-boundary/error-boundary';

function Application(props) {
  React.useEffect(() => {
    applyTheme();
        const { isAuthenticated, userNotificationAdd
    return () => {
      if (window.cable && window.cable.subscriptions) {
            window.cable.subscriptions.subscriptions.forEach((sub) => sub.unsubscribe());
    }
  }, []);
  return (const { currentUser, notifications, isAuthenticated, isStarted, isFetching, size, children } =
      props;

    return (
      <ErrorBoundary>
        <div>
          <Header
            isAuthenticated={isAuthenticated);
}
const mapStateToProps = (state) => ({
  session: state.session,
  isAuthenticated: state.session.isAuthenticated,
  currentUser: state.currentUser.item,
  isStarted: state.currentUser.isStarted,
  isFetching: state.currentUser.isFetching,
  notifications: state.notifications,
});

const mapDispatchToProps = {
  logout,
  markNotificationAsSeen,
  userNotificationAdd,
};

export default withSize()(connect(mapStateToProps, mapDispatchToProps)(Application));