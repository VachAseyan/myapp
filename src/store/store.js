import { createStore } from 'redux';
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import productTypeReducer from './reducers/productTypeReducer'

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: [productTypeReducer]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

// 4. Create a Persistor
const persistor = persistStore(store);

export { store, persistor };
