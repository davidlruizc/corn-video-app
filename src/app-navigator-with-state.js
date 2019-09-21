import React, { Component } from 'react'
import { connect } from 'react-redux'

// React navigation helper
import { createReduxContainer } from 'react-navigation-redux-helpers'

import AppNavigator from './app-navigator'

// Listen everything that comes in 'root'
const ReduxifyApp = createReduxContainer(AppNavigator, 'root')

export class AppNavigatorWithState extends ReduxifyApp {

}

// Send props from the state
function mapStateToProps(state) {
  return {
    state: state.navigation,
  }
}

export default connect(mapStateToProps) (AppNavigatorWithState)
