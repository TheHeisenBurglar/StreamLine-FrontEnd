import {
    GET_INVS_ERROR,
    GET_INVS_LOADING,
    GET_INVS_SUCCESS,
    CREATE_INVS_ERROR,
    CREATE_INVS_LOADING,
    CREATE_INVS_SUCCESS,
    DELETE_INVS_ERROR,
    DELETE_INVS_LOADING,
    DELETE_INVS_SUCCESS,
    UPDATE_INVS_ERROR,
    UPDATE_INVS_LOADING,
    UPDATE_INVS_SUCCESS,
  } from "./invs.types";
  
  let initialState = {
    loading: false,
    error: false,
    data: [],
  };
  
  export const invReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_INVS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case GET_INVS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      case GET_INVS_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
  
      case CREATE_INVS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case CREATE_INVS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      case CREATE_INVS_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
  
      case UPDATE_INVS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case UPDATE_INVS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      case UPDATE_INVS_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
  
      case DELETE_INVS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case DELETE_INVS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      case DELETE_INVS_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
  
      default: {
        return state;
      }
    }
  };
  