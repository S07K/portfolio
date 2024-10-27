import { createSlice } from '@reduxjs/toolkit'

export const navSlice = createSlice({
  name: 'navstate',
  initialState: {
    data: {
        intro: true,
        exp: false,
        edu: false,
        projects: false
    },
    isOpen: false,
    loading: true,
    darkMode: false
  },
  reducers: {
    switchView: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.data = action.payload
    },
    toggleDrawer: (state, action) => {
      state.isOpen = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    switchMode: (state, action) => {
      state.darkMode = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { switchView, toggleDrawer, setLoading, switchMode } = navSlice.actions

export default navSlice.reducer