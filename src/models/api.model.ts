export interface Lesson {
	type: string
	name: string
	duration: number
}

export interface Section {
	courseID: string
	name?: string
	data?: Lesson[]
}

export interface ICourse {
	id: string
	title?: string
	subtitle?: string
	previewURL?: string
	author?: string
	rating?: number
	isPopular?: boolean
	features?: string[]
	description?: string
}
