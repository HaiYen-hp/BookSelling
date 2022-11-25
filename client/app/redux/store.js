import * as types from "./types";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

let alert = {};
const Alert = (state = alert, action) => {
    if (action.type === types.ALERT) {
        alert = action.alert;
        return alert;
    }
    return state;
};

let _token = "";
const token = (state = _token, action) => {
    switch (action.type) {
        case types.SAVE_TOKEN:
            _token = action.token;
            return _token;
        case types.USER_LOGOUT:
            _token = action.token;
            return _token;
        default:
            return state;
    }
};

let userData = {};
const user = (state = userData, action) => {
    if (action.type === types.SAVE_USER_INFO) {
        userData = action.user;
        return userData;
    }
    return state;
};

let isShowLoading = false;
const showLoading = (state = isShowLoading, action) => {
    if (action.type === types.SHOW_LOADING) {
        isShowLoading = action.isShowLoading;
        return isShowLoading;
    }
    return state;
};

let showPopupNoti = "";
const changePopupNoti = (state = showPopupNoti, action) => {
    if (action.type === types.CHANGE_POPUP_NOTI) {
        showPopupNoti = action.showPopupNoti;
        return showPopupNoti;
    }
    return state;
};

let showPopupConfirm = {
    title: null,
    content: null,
    action: null,
    cancel: "",
    confirm: "",
};
const changePopupConfirm = (state = showPopupConfirm, action) => {
    if (action.type === types.CHANGE_POPUP_CONFIRM) {
        showPopupConfirm = action.showPopupConfirm;
        return showPopupConfirm;
    }
    return state;
};

let show = false;
const showModal = (state = show, action) => {
    if (action.type === types.SHOW_MODAL) {
        show = action.show;
        return show;
    }
    return state;
};

const reducer = combineReducers({
    alert: Alert,
    token: token,
    user: user,
    showLoading: showLoading,
    showModal: showModal,
    changePopupNoti: changePopupNoti,
    changePopupConfirm: changePopupConfirm,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;