const { createSlice } = require('@reduxjs/toolkit')

const initialState = []

const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {
    fetchData(state, action) {
      return [...action.payload]
    }
  }
})

export default newsSlice
