import { persistStore } from 'redux-persist';
import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

import persistedReducers from './modules/reduxPersist';

const store = createStore(persistedReducers(rootReducer));

export const persistor = persistStore(store);
export default store;
