"use client"
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from '@/reduxhandler'
import { createStore } from 'redux';
import MainApp from './app'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer);
let persistor = persistStore(store)
import { PersistGate } from 'redux-persist/integration/react'

function app() {
  return (
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
          <MainApp />
      </PersistGate>
    </Provider>
  )
}

export default app;
