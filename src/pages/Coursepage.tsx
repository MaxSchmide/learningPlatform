import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where,
} from "firebase/firestore"
import { useCallback, useEffect } from "react"
import { ScrollRestoration, useParams } from "react-router-dom"
import CourseContent from "../components/CourseContent"
import CourseHero from "../components/CourseHero"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { db } from "../firebase"
import { Section } from "../models/api.model"
import {
	fetchingData,
	setSections,
	setSelectedCourse,
	useAppDispatch,
} from "../store"

const Coursepage = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const fetchCourseAndSections = useCallback(async () => {
		dispatch(fetchingData())
		const docRef = doc(db, "courses", id!)
		const docSnap = await getDoc(docRef)
		const q = query(collection(db, "lessons"), where("courseID", "==", id))
		const result: Section[] = []
		const querySnapshot = await getDocs(q)
		querySnapshot.forEach((lesson) =>
			result.push({ courseID: id!, ...lesson.data() })
		)
		dispatch(setSelectedCourse(docSnap.data()))
		dispatch(setSections(result))
	}, [db, id])

	useEffect(() => {
		fetchCourseAndSections()
	}, [fetchCourseAndSections])

	return (
		<>
			<ScrollRestoration />
			<header className="background">
				<Navbar />
				<CourseHero />
			</header>
			<CourseContent />
			<Footer />
		</>
	)
}

export default Coursepage
