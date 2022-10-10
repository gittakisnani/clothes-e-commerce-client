import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    refresh: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken, refreshToken } = action.payload
            state.token = accessToken

            if(refreshToken) state.refresh = refreshToken;
        }
    }
})

export const { setCredentials } = authSlice.actions;

export const getCurrentToken = (state: { auth: { token: string, refresh: string }}) => state.auth 
export default authSlice.reducer;


