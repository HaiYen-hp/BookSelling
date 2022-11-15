import AsyncStorage from "@react-native-async-storage/async-storage";

export const item = {};

export const setItem = async (key, value, type) => {
  if (type === "JSON") {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } else {
    await AsyncStorage.setItem(key, value.toString());
  }
};

export const getItem = async (key, type) => {
    try {
      const value = await AsyncStorage.getItem(key);
  
      if (value !== null) {
        return value;
      }
      if (type === "JSON") {
        return JSON.parse(value);
      }
      return "";
    } catch (error) {
      return "";
    }
  };
  
  export const removeItem = async (key) => {
    await AsyncStorage.removeItem(key);
  };
  
  export const removeMulti = async (keys) => {
    await AsyncStorage.multiRemove(keys);
  };
  