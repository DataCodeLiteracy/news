import thunk from 'redux-thunk'

const { default: newsSlice } = require('@/slices/newsSlice')
const { configureStore, applyMiddleware } = require('@reduxjs/toolkit')

const loggerMiddleware = (store) => (next) => (action) => {
  next(action)
}
const middleware = applyMiddleware(thunk, loggerMiddleware)

const store = configureStore({
  reducer: newsSlice.reducer,
  middleware: [thunk]
})

export const newsSliceActions = newsSlice.actions

export default store
