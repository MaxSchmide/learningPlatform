import { createSlice } from "@reduxjs/toolkit"
import { ICourse, Section } from "../../models/api.model"

type State = {
	isLoading: boolean
	data: ICourse[]
	selectedCourse: ICourse | null
	sections: Section[]
}

const initialState: State = {
	isLoading: false,
	data: [],
	selectedCourse: null,
	sections: [],
}

const coursesSlice = createSlice({
	name: "courses",
	initialState,
	reducers: {
		fetchingData: (state) => {
			state.isLoading = true
		},
		setCourses: (state, action) => {
			state.isLoading = false
			state.data = action.payload
		},

		setSelectedCourse: (state, action) => {
			state.isLoading = false
			state.selectedCourse = action.payload
		},
		setSections: (state, action) => {
			state.isLoading = false
			state.sections = action.payload
		},
	},
})
export const { setCourses, fetchingData, setSelectedCourse, setSections } =
	coursesSlice.actions
export const coursesReducer = coursesSlice.reducer
