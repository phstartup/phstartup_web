"use client"
import React, { useState } from 'react';
import Home from '@/pages/home'
import { connect } from 'react-redux';
import { Color } from '@/util/Color';
function app(props) {
  const { user, token, activity, isLoading } = props.state;
  return (
    <main>
          {
            // loggedin
            (user && token && !isLoading) && (
              <h1>Welcome</h1>
            )
          }

          {
            // on loading
            isLoading && (
              <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.white
              }}>
                <h1>Loading</h1>
              </div>
            )
          }
          {
            // not logged in
            (!user && !isLoading && !token) && (
              <Home></Home>
            )
          }
    </main>
  )
}



const mapStateToProps = (state) => ({ state: state });

const mapDispatchToProps = (dispatch) => {
  const { actions } = require('@/reduxhandler');
  return {
    login: (user, token) => dispatch(actions.login(user, token)),
    logout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(app);
