import MMKVStorage from 'react-native-mmkv-storage';

const mmkv = new MMKVStorage.Loader().initialize();

const storeData = async (key, value) => {
  try {
    await mmkv.setStringAsync(key, value);
  } catch (e) {
    // handle error
  }
};

const getData = async (key) => {
  try {
    const value = await mmkv.getStringAsync(key);
    return value;
  } catch (e) {
    // handle error
  }
};

export { storeData, getData };