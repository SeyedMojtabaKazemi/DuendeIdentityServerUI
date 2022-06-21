import { configureStore } from '@reduxjs/toolkit'
import userManager from '../Store/userManager'
import dashboardSlice from './reducers/dashboardSlice'
import { reducer as oidcReducer , loadUser} from 'redux-oidc';

const store = configureStore({
  reducer: {
     dashboard: dashboardSlice,
    // softwarePart:softwarePartSlice,
    // parrotTranslation:parrotTranslationSlice,
    oidc: oidcReducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['redux-oidc/USER_FOUND'],
      ignoredPaths: ['oidc.user']
    },
  }),
})

loadUser(store, userManager);

export default store
