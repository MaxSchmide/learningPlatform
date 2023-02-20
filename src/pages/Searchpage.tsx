import { ScrollRestoration } from "react-router-dom"
import Browse from "../components/Browse"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import Topics from "../components/Topics"

const Browsepage = () => {
	return (
		<>
			<ScrollRestoration />

			<header className="background">
				<Navbar />
				<SearchBar />
			</header>
			<section className="px-25 py-18">
				<Browse type="recommended" />
				<Browse type="viewing" />
				<Topics />
				<Browse type="top" />
			</section>
			<Footer />
		</>
	)
}

export default Browsepage
