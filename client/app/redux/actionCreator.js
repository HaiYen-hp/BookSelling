import * as types from "./types"

export function actionShowLoading(isShowLoading) {
    return {
      type: types.SHOW_LOADING,
      isShowLoading,
    };
}

export function actionShowModal(show) {
  return {
    type: types.SHOW_MODAL,
    show,
  };
}

export const getAlert = (alert) => (dispatch) => {
  return dispatch({
    type: types.ALERT,
    alert,
  });
};

export function actionSaveToken(token) {
  setItem("token", token, "TEXT");
  return {
    type: types.SAVE_TOKEN,
    token,
  };
}

export function actionSaveUser(user) {
  setItem("user", user, "JSON");
  return {
    type: types.SAVE_USER_INFO,
    user,
  };
}

export function actionChangePopupNoti(showPopupNoti) {
    return {
      type: types.CHANGE_POPUP_NOTI,
      showPopupNoti,
    };
}

export function actionChangePopupConfirm(showPopupConfirm) {
  return {
    type: types.CHANGE_POPUP_CONFIRM,
    showPopupConfirm,
  };
}

export function actionShowPopup(cmd, params = null) {
  return {
    type: types.SHOW_POPUP,
    popup: { cmd, params },
  };
}

export function logout(keys) {
  removeMulti(keys);
  return {
    type: types.USER_LOGOUT,
    token: "",
  };
}