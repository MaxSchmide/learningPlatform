import { ScrollRestoration } from "react-router-dom"
import Footer from "../components/Footer"
import LessonContent from "../components/LessonContent"
import LessonHero from "../components/LessonHero"
import Navbar from "../components/Navbar"

const Lessonpage = () => {
	return (
		<>
			<ScrollRestoration />
			<header className="background">
				<Navbar />
				<LessonHero />
			</header>
			<LessonContent />
			<Footer />
		</>
	)
}

export default Lessonpage
