import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import reducers from '../reducers';
import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const configureStore = () => {
  const preducers = persistReducer(persistConfig, reducers);

  const store = createStore(preducers);
  const persistor = persistStore(store);

  return {store, persistor};
};
export default configureStore;
