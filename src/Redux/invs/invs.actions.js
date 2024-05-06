import axios from "axios";
import { store } from "../store"
import { CREATE_INVS_ERROR, CREATE_INVS_LOADING, CREATE_INVS_SUCCESS, GET_INVS_ERROR, GET_INVS_LOADING, GET_INVS_SUCCESS, UPDATE_INVS_ERROR, UPDATE_INVS_LOADING, UPDATE_INVS_SUCCESS } from "./invs.types"
import { BASE_URL } from "../../Constants/config";
import { LOGOUT } from "../users/user.types";
import { useSelector } from "react-redux";



export const getInvs = () => async(dispatch) => {
    const { token } = store.getState().userReducer
    console.log(token);
    dispatch({ type: GET_INVS_LOADING });
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
            dispatch({ type: GET_INVS_SUCCESS, payload: data});

        } else if(status = 2){
            dispatch({type:LOGOUT})
        } else{
            dispatch({type: GET_INVS_ERROR})
        }
    } catch (error) {
        dispatch({ type: GET_INVS_ERROR});
    }
};
export const createInvs = (obj) => async (dispatch) => {
    const { token } = store.getState().userReducer
    dispatch({ type: CREATE_INVS_LOADING });
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
        dispatch({ type: CREATE_INVS_SUCCESS });
        dispatch(getInvs())
      } else if(status==2){
        dispatch({type:LOGOUT})
      } else{
        dispatch({ type: CREATE_INVS_ERROR });
      }
    } catch (error) {
      dispatch({ type: CREATE_INVS_ERROR });
    }
  };
export const updateInvs = (id, obj) => async (dispatch) => {
  const { token } = store.getState().userReducer
  dispatch({type:UPDATE_INVS_LOADING});
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
      dispatch({type: UPDATE_INVS_SUCCESS});
      dispatch(getInvs());
    } else if(status == 2){
      dispatch({type: LOGOUT});
    } else {
      dispatch({type: UPDATE_INVS_ERROR});
    }
  } catch(error){
    dispatch({type: UPDATE_INVS_ERROR});
  }
};