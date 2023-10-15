import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
  name: 'login',
  initialState: {
    AutObj: {},
    logedIn: false

  },

  reducers: {
    loginReducer: (state, action) => {
      localStorage.setItem("useAuth", JSON.stringify(action.payload))
      state.AutObj = JSON.stringify(action.payload)
      state.logedIn = true
    }
  },
})

export const { login, loginReducer } = loginSlice.actions
export default loginSlice.reducer;
