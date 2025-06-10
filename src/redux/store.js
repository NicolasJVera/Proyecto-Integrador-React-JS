import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { categoriesReducer, productsReducer, cartReducer } from "./slices";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const reducers = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
}

const persitedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persitedReducer,
});

export const persitor = persistStore(store)