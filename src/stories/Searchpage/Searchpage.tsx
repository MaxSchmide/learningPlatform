import React, { useState } from "react"
import {
	TbBrandFacebook,
	TbBrandInstagram,
	TbBrandYoutube,
	TbChevronLeft,
	TbChevronRight,
	TbSearch,
} from "react-icons/tb"
import logo from "../../images/favicon.svg"
import "../../index.css"
import CategoriedVideos from "../CategoriedVideos/CategoriedVideos"
import Navbar from "../Navbar/Navbar"

type User = {
	name: string
}
const Searchpage = () => {
	const [user, setUser] = useState<User>()
	const year = new Date().getFullYear()
	const containerRef = React.useRef<HTMLDivElement>(null)
	const handleRightClick = () => {
		containerRef.current!.scrollLeft += 200
		if (containerRef.current!.classList.contains("mask-0")) {
			containerRef.current!.classList.remove("mask-0")
			containerRef.current?.classList.add("mask")
		}
		if (
			containerRef.current!.scrollLeft >=
			containerRef.current!.scrollWidth - 1200
		) {
			containerRef.current!.classList.remove("mask")
			containerRef.current?.classList.add("mask-100")
		}
	}
	const handleLeftClick = () => {
		containerRef.current!.scrollLeft -= 200
		if (containerRef.current!.classList.contains("mask-100")) {
			containerRef.current!.classList.remove("mask-100")
			containerRef.current?.classList.add("mask")
		}
		if (containerRef.current!.scrollLeft <= 200) {
			containerRef.current!.classList.remove("mask")
			containerRef.current?.classList.add("mask-0")
		}
	}
	const categories = [
		"Development",
		"Finance & Accounting",
		"IT & Software",
		"Office Productivity",
		"Personal Development",
		"Development",
		"Finance & Accounting",
		"Personal Development",
		"Office Productivity",
		"Office Productivity",
		"Office Productivity",
		"IT & Software",
	]
	return (
		<>
			<header className="background">
				<Navbar user={user} onLogin={() => setUser({ name: "John Smitt" })} />
				<div className="py-25 px-56 text-center">
					<h3 className="text-h3 text-white mb-14">
						Find a course to help you reach
						<br />
						where you want to go
					</h3>
					<form className="relative px-20 mb-16">
						<input
							type="text"
							id="search"
							placeholder="Search for anythig..."
							className="w-full rounded text-body2 py-5 pl-6 pr-16 outline-none"
						/>
						<label
							htmlFor="search"
							className="absolute text-blue right-24 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 ease-in duration-150"
						>
							<TbSearch size={28} />
						</label>
					</form>
					<div className="relative">
						<TbChevronLeft
							onClick={handleLeftClick}
							className="arrows--grey absolute left-0 top-1/2 -translate-y-1/2 select-none"
						/>

						<div
							ref={containerRef}
							className="flex items-center gap-2 overflow-x-hidden mx-20  scroll-smooth mask-0"
						>
							{categories.map((item, index) => (
								<span
									key={index}
									className="hover:bg-white hover:text-black ease-in-out duration-200 select-none cursor-pointer inline-block py-4 px-6 whitespace-nowrap text-body3 text-white rounded border border-white border-opacity-10 text-center"
								>
									{item}
								</span>
							))}
						</div>
						<TbChevronRight
							onClick={handleRightClick}
							className="arrows--grey absolute right-0 top-1/2 -translate-y-1/2 select-none"
						/>
					</div>
				</div>
			</header>
			<section className="px-25 py-18">
				<CategoriedVideos type="recommended" />
				<CategoriedVideos type="viewing" />
				<div className="mb-24">
					<h4 className="text-h4 mb-8">Topics recommended for you</h4>
					<div className="grid grid-cols-4 grid-rows-2 gap-8">
						<div className="topics__card">CSS</div>
						<div className="topics__card">HTML</div>
						<div className="topics__card">HTML5</div>
						<div className="topics__card">JavaScript</div>
						<div className="topics__card">React JS</div>
						<div className="topics__card">React Hooks</div>
						<div className="topics__card">Redux Framework</div>
						<div className="topics__card">Node.Js</div>
					</div>
				</div>
				<CategoriedVideos type="top" />
			</section>
			<footer className="px-25 pt-14 pb-8 background">
				<div className=" flex justify-between items-center mb-25">
					<div className="select-none flex gap-4 items-center">
						<img src={logo} alt="logo" />
						<p className="text-white text-body2-extrabold">learningPlatform</p>
					</div>
					<div>
						<ul className="flex gap-8">
							<li className="footer__item">Browse</li>
							<li className="footer__item">Categories</li>
							<li className="footer__item">FAQ</li>
						</ul>
					</div>
					<div className="text-grey flex gap-7">
						<TbBrandFacebook
							size={22}
							className="cursor-pointer ease-in duration-200 hover:text-yellow-light"
						/>
						<TbBrandYoutube
							size={22}
							className="cursor-pointer ease-in duration-200 hover:text-yellow-light"
						/>
						<TbBrandInstagram
							size={22}
							className="cursor-pointer ease-in duration-200 hover:text-yellow-light"
						/>
					</div>
				</div>
				<p className=" text-body3 text-grey">© learningPlatform, {year}</p>
			</footer>
		</>
	)
}

export default Searchpage
