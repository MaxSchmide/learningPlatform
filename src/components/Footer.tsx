import {
	TbBrandFacebook,
	TbBrandInstagram,
	TbBrandYoutube,
} from "react-icons/tb"
import { Link } from "react-router-dom"
import logo from "../images/favicon.svg"

const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<footer className="px-25 pt-14 pb-8 background">
			<div className=" flex justify-between items-center mb-25">
				<div className="select-none flex gap-4 items-center">
					<img src={logo} alt="logo" />
					<p className="text-white text-body2-extrabold">learningPlatform</p>
				</div>
				<div>
					<ul className="flex gap-8">
						<Link to="/browse" className="footer__item">
							Browse
						</Link>
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
	)
}

export default Footer
