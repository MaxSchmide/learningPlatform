import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { authReducer } from "./slices/authSlice"
import { coursesReducer } from "./slices/coursesSlice"

const store = configureStore({
	reducer: {
		auth: authReducer,
		courses: coursesReducer,
	},
})

export { store }
export * from "./slices/authSlice"
export * from "./slices/coursesSlice"
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>
