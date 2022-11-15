import axios from "axios";
import { actionChangePopupNoti, actionShowLoading } from "../redux/actionCreator";
import store from "../redux/store";

import { API } from "../Config";

export const URL_API = {
    LOGIN: "User/login",
    REGISTER: "User/create",
    UPDATE: "User/update-user"
};

export const api_login = (data, callback, callback_error) => {
    // if (dispatch) dispatch(actionShowLoading(true));
    // let token = data.account_token || store.getState().token || "";
    let config = {
        headers: {"Content-Type": "application/json"},
    };
    // if (token) {
    //     config = {
    //         headers: { "Content-Type": "application/json", Authorization: token },
    //     }
    // }
    axios
        .post(API + URL_API.LOGIN, data, config)
        then((response) => {
            // if (dispatch) dispatch(actionShowLoading(false));

            if (response.status === 200) {
              callback(response.data);
            }
        })
        .catch((response_error) => {
            // if (dispatch) dispatch(actionShowLoading(false));
            console.log(response_error);
            if (response_error.response)
              if (response_error.response && response_error.response.data) {
                // dispatch(actionChangePopupNoti(response_error.response.data.message));
                callback_error();
              } else {
                console.log(`error [POST] : ${response_error}`);
              }
          });
};

export const api_register = (data, callback, callback_error) => {
    // if (dispatch) dispatch(actionShowLoading(true));
    let config = {
        headers: { "Content-Type": "application/json" },
    };

    axios
        .post(API + URL_API.REGISTER, data, config)
        then((response) => {
            // if (dispatch) dispatch(actionShowLoading(false))

            if (response.status === 200) {
                callback(response.data);
            }
        })
        .catch((response_error) => {
            // if (dispatch) dispatch(actionShowLoading(false));
            console.log(response_error);
            if (response_error.response)
            if (response_error.response && response_error.response.data) {
            //   dispatch(actionChangePopupNoti(response_error.response.data.message));
              callback_error();
            } else {
              console.log(`error [POST] : ${response_error}`);
            }
        });
}