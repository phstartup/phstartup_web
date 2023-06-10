import React, {useEffect} from "react";
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helper from 'common/Helper';
import CommonApi from 'services/commonApi'
function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

  let token = localStorage.getItem(`${Helper.APP_NAME}token`)
  let { user } = rest.state;

  useEffect(() => {

    if (user == null && token) {
      const { setIsLoading } = rest
      CommonApi.getAuthenticatedUser(user => {
        setIsLoading(false)
        const { login, logout } = rest;

        if (user && !user.error) {
          login(user, token)
        } else {
          logout()
        }
      }, error => {
        const { logout } = rest
        setIsLoading(false)
        logout()
      })
    }
  }, [rest, token, user])

  // Route is private and the user is not logged in
  if (isPrivate && !user && !token) {
    return <Redirect to="/" />
  }

  // Route is public and the user is logged in

  if (!isPrivate && user && token) {
    return <Redirect to="/dashboard" />
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  // component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false
};

const mapStateToProps = (state) => ({ state: state });

const mapDispatchToProps = (dispatch) => {
  const { actions } = require('reduxhandler');
  return {
    login: (user, token) => dispatch(actions.login(user, token)),
    setIsLoading: (flag) => dispatch(actions.setIsLoading(flag)),
    logout: () => dispatch(actions.logout())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RouteWrapper);