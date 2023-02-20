import { collection, getDocs, limit, query } from "firebase/firestore"
import { useCallback, useEffect } from "react"
import { ScrollRestoration } from "react-router-dom"
import Categories from "../components/Categories"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import SemiHero from "../components/SemiHero"
import CallToAction from "../components/CallToAction"
import Testimonials from "../components/Testimonials"
import { db } from "../firebase"
import { ICourse } from "../models/api.model"
import { fetchingData, setCourses, useAppDispatch } from "../store"

const Homepage = () => {
	const dispatch = useAppDispatch()
	const fetchCourses = useCallback(async () => {
		dispatch(fetchingData())
		const q = query(collection(db, "courses"), limit(4))
		const querySnapshot = await getDocs(q)
		const result: ICourse[] = []
		querySnapshot.forEach((doc) => {
			result.push({ id: doc.id, ...doc.data() })
		})
		dispatch(setCourses(result))
	}, [dispatch, db])

	useEffect(() => {
		fetchCourses()
	}, [fetchCourses])

	return (
		<>
			<ScrollRestoration />
			<header className="background">
				<Navbar />
				<Hero />
			</header>
			<SemiHero />
			<Testimonials />
			<Categories />
			<Features />
			<Testimonials testimonials />
			<CallToAction />
			<Footer />
		</>
	)
}

export default Homepage
