/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import jwt_decode from "jwt-decode";

export const dashboardSlice = createSlice({
  name: 'Dashboard',
  initialState: {
    sidebar: {
      isOpen: false,
    },
    userProfile: {
      isOpen: false,
    },
    sidebarToggle:{
      isOpen: false,
    },
    odicState: {
      isLoadingUser: false,
      user: {
        id_token: '',
        session_state: '',
        access_token: '',
        refresh_token: '',
        token_type: '',
        scope: '',
        profile: '',
        expires_at: 0,
        expired: true,
        expires_in: 0,
        scopes: [],
        path: '/'
      }
    },
    userClaims: {
      roles: [],
      services: [],
      controllers: [],
      actions: [],
      isLogOut: false,
    },
  },
  reducers: {
    // Change sidebar menu status
    setSidebarMenu: (state) => {
      state.sidebar.isOpen = !state.sidebar.isOpen
    },

    // Change user profile menu status
    setUserProfileMenu: (state) => {
      state.userProfile.isOpen = !state.userProfile.isOpen
    },

    setSidebarToggleMenu: (state) => {
      state.sidebarToggle.isOpen = !state.sidebarToggle.isOpen
    },
    setUserClaims: (state, action) => {
      let tokenData = jwt_decode(action.payload);
      let roles = [];
      let services = [];
      let controllers = [];
      let actions = []
      if (tokenData.role) {
        if (Array.isArray(tokenData.role))
          roles = tokenData.role;
        else
          roles.push(tokenData.role);
      }
      if (tokenData.service) {
        if (Array.isArray(tokenData.service))
          services = tokenData.service;
        else
          services.push(tokenData.service);
      }
      if (tokenData.controller) {
        if (Array.isArray(tokenData.controller))
          controllers = tokenData.controller;
        else
          controllers.push(tokenData.controller);
      }
      if (tokenData.action) {
        if (Array.isArray(tokenData.action))
          actions = tokenData.action;
        else
          actions.push(tokenData.action);
      }
      state.userClaims = {
        roles, services, controllers, actions
      }
    },
    clearUserClaims: (state) => {
      state.userClaims = {
        services: [],
        controllers: [],
        actions: [],
        isLogOut: true
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSidebarMenu, setUserProfileMenu, setSidebarToggleMenu, setUserClaims, clearUserClaims } = dashboardSlice.actions

export default dashboardSlice.reducer
