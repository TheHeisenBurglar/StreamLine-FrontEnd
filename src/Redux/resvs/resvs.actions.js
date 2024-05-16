import axios from "axios";
import { store } from "../store"
import { CREATE_RESVS_ERROR, CREATE_RESVS_LOADING, CREATE_RESVS_SUCCESS, GET_RESVS_ERROR, GET_RESVS_LOADING, GET_RESVS_SUCCESS, UPDATE_RESVS_ERROR, UPDATE_RESVS_LOADING, UPDATE_RESVS_SUCCESS } from "./resvs.types"
import { BASE_URL } from "../../Constants/config";
import { LOGOUT } from "../users/user.types";
import { useSelector } from "react-redux";



export const getResvs = () => async(dispatch) => {
    const { token } = store.getState().userReducer
    console.log(token);
    dispatch({ type: GET_RESVS_LOADING });
    try {
        const res = await axios(BASE_URL + "/inv", {
            method: "get",
            headers: {
                Authorization: token,
            },
        });
        const { status, message, data } = res.data;
        console.log("message: " +message +" status: " + status);
        if(status == 1){
            dispatch({ type: GET_RESVS_SUCCESS, payload: data});

        } else if(status = 2){
            dispatch({type:LOGOUT})
        } else{
            dispatch({type: GET_RESVS_ERROR})
        }
    } catch (error) {
        dispatch({ type: GET_RESVS_ERROR});
    }
};
export const createResvs = (obj) => async (dispatch) => {
    const { token } = store.getState().userReducer
    dispatch({ type: CREATE_RESVS_LOADING });
    try {
      const res = await axios(BASE_URL + "/inv/create", {
        method: "post",
        data: obj,
        headers: {
          Authorization: token,
        },
      });
      const { status, message, data } = res.data;
      console.log(message);
  
      if (status == 1) {
        dispatch({ type: CREATE_RESVS_SUCCESS });
        dispatch(getResvs())
      } else if(status==2){
        dispatch({type:LOGOUT})
      } else{
        dispatch({ type: CREATE_RESVS_ERROR });
      }
    } catch (error) {
      dispatch({ type: CREATE_RESVS_ERROR });
    }
  };
export const updateResvs = (id, obj) => async (dispatch) => {
  const { token } = store.getState().userReducer
  dispatch({type:UPDATE_RESVS_LOADING});
  try{
    const res = await axios(BASE_URL + "/inv", {
      method: "patch",
      data:obj,
      headers: {
        Authorization: token,
        id: id,
      },
    });
    const { status, message, data } = res.data;
    console.log(message);
    if(status == 1){
      dispatch({type: UPDATE_RESVS_SUCCESS});
      dispatch(getResvs());
    } else if(status == 2){
      dispatch({type: LOGOUT});
    } else {
      dispatch({type: UPDATE_RESVS_ERROR});
    }
  } catch(error){
    dispatch({type: UPDATE_RESVS_ERROR});
  }
};