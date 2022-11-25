// Base url API
export const BASE_URL = "http://192.168.1.3:45455/api/"

// endpoint API

const LOGIN = BASE_URL + "User/login";
const REGISTER = BASE_URL + "User/create";

export default {
    LOGIN,
    BASE_URL,
    REGISTER
}