import {
    GET_RESVS_ERROR,
    GET_RESVS_LOADING,
    GET_RESVS_SUCCESS,
    CREATE_RESVS_ERROR,
    CREATE_RESVS_LOADING,
    CREATE_RESVS_SUCCESS,
    DELETE_RESVS_ERROR,
    DELETE_RESVS_LOADING,
    DELETE_RESVS_SUCCESS,
    UPDATE_RESVS_ERROR,
    UPDATE_RESVS_LOADING,
    UPDATE_RESVS_SUCCESS,
  } from "./resvs.types";
  
  let initialState = {
    loading: false,
    error: false,
    data: [],
  };
  
  export const invReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_RESVS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case GET_RESVS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      case GET_RESVS_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
  
      case CREATE_RESVS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case CREATE_RESVS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      case CREATE_RESVS_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
  
      case UPDATE_RESVS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case UPDATE_RESVS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      case UPDATE_RESVS_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
  
      case DELETE_RESVS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case DELETE_RESVS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      case DELETE_RESVS_ERROR: {
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
  