import thunk from 'redux-thunk'

const { default: newsSlice } = require('@/slices/newsSlice')
const { configureStore, applyMiddleware } = require('@reduxjs/toolkit')
import { createWrapper } from 'next-redux-wrapper'

const loggerMiddleware = (store) => (next) => (action) => {
  next(action)
}
const middleware = applyMiddleware(thunk, loggerMiddleware)

const makeStore = () =>
  configureStore({
    reducer: newsSlice.reducer,
    middleware: [thunk]
  })

const store = makeStore()

export const newsSliceActions = newsSlice.actions
export const wrapper = createWrapper(makeStore)

export default store
