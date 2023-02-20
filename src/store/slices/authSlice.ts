import { SerializedError, createSlice } from "@reduxjs/toolkit"

interface InitialState {
	accessToken: string | null
	user: string | null
	error: null | SerializedError
}
const initialState: InitialState = {
	accessToken: sessionStorage.getItem("lp-access-token") || null,
	user: JSON.parse(sessionStorage.getItem("lp-profile")!) || null,
	error: null,
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authSuccess: (state, action) => {
			state.accessToken = action.payload.accessToken
			state.user = action.payload.profile
		},
		authFail: (state, action) => {
			state.error = action.payload
		},
		logOut: (state) => {
			state.user = null
			state.accessToken = null
		},
	},
})
export const { authSuccess, authFail, logOut } = authSlice.actions
export const authReducer = authSlice.reducer
