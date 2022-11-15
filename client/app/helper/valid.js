export const validRegister = ({ username, email, password, cfpassword }) => {
    const err = {};
  
    if (!username) {
      err.username = "Hãy nhập vào tên đăng nhập.";
    }

    if (!email) {
        err.username = "Hãy nhập vào email.";
      }
  
    if (!password) {
      err.password = "Hãy nhập vào mật khẩu.";
    }
  
    if (!cfpassword) {
      err.cfpassword = "Hãy nhập vào nhập vào mật khẩu.";
    }
  
    if (password !== cfpassword) {
      err.cfpassword = "Nhập lại mật khẩu không đúng với mật khẩu.";
    }
  
    return {
      errMsg: err,
      errLength: Object.keys(err).length,
    };
  };
  
  export const validLogin = (username, password) => {
    const err = {};
  
    if (!username) {
      err.username = "Hãy nhập vào tên đăng nhập.";
    }
  
    if (!password) {
      err.password = "Hãy nhập vào mật khẩu.";
    }
  
    return {
      errMsg: err,
      errLength: Object.keys(err).length,
    };
  };
  