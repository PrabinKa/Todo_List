import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data) || [];
  } catch (error) {
    console.error(`Error getting data from ${key}: ${error}`);
    return [];
  }
};

const setData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error setting data in ${key}: ${error}`);
  }
};

export { getData, setData };