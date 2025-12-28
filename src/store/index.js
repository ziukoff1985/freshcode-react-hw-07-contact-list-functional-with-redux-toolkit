// *** OLD IMPORTS WITHOUT REDUX TOOLKIT ***
// import { createStore } from 'redux';
// import { applyMiddleware } from 'redux'; // метод для додавання middleware
// import { composeWithDevTools } from '@redux-devtools/extension'; // для роботи Redux DevTools
// import contactsReducer from './reducers/contactsReducer';
// *** =================================== ***
import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './slices/contactsSlice';

import logger from 'redux-logger'; // для middleware - logger

export default configureStore({
    reducer: {
        contactsList: contactsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// *** OLD CODE WITHOUT REDUX TOOLKIT ***
// const middleware = applyMiddleware(logger); // додавання middleware logger

// export default createStore(contactsReducer, composeWithDevTools(middleware));
