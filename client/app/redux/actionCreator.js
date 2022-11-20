import * as types from "./types"

export function actionShowLoading(isShowLoading) {
    return {
      type: types.SHOW_LOADING,
      isShowLoading,
    };
}

export function actionChangePopupNoti(showPopupNoti) {
    return {
      type: types.CHANGE_POPUP_NOTI,
      showPopupNoti,
    };
}

export const getAlert = (alert) => (dispatch) => {
    return dispatch({
      type: types.ALERT,
      alert,
    });
  };