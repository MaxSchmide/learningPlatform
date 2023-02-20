import { TbSearch, TbUser } from "react-icons/tb"
import logo from "../../images/favicon.svg"
import Button from "../Button/Button"

type User = {
	name: string
}

type Props = {
	home?: boolean
	backgroundColor?: string
	user?: User
	onLogin?: () => void
	onLogout?: () => void
}

const Navbar = ({ user, onLogin, onLogout, backgroundColor, home }: Props) => {
	return (
		<nav
			style={{ backgroundColor }}
			className="relative h-20 md:h-25 px-25 flex justify-between items-center text-white border-b-2 border-white border-opacity-10"
		>
			<div className="select-none">
				<img
					src={logo}
					alt="logo"
					className="absolute left-16 top-6 md:!top-6 md:!left-16 lg:top-3 lg:left-8 "
				/>
				<p className="text-body2-extrabold md:hidden">learningPlatform</p>
			</div>
			<ul className="flex min-h-full">
				<li className="px-4 flex  items-center text-body2-bold cursor-pointer hover:text-yellow-light ease-in-out duration-200 hover:border-b-2 hover:border-yellow">
					Browse
				</li>
				<li className="px-4 flex  items-center text-body2-bold cursor-pointer hover:text-yellow-light ease-in-out duration-200 hover:border-b-2 hover:border-yellow">
					Categories
				</li>
				<li className="px-4 flex  items-center text-body2-bold cursor-pointer hover:text-yellow-light ease-in-out duration-200 hover:border-b-2 hover:border-yellow">
					FAQ
				</li>
				{home && (
					<li className="px-4 flex  items-center text-body2-bold cursor-pointer hover:text-yellow-light ease-in-out duration-200 hover:border-b-2 hover:border-yellow">
						<TbSearch size={16} />
					</li>
				)}
			</ul>
			<div className="flex gap-2 items-center">
				{user ? (
					<>
						<TbUser
							size={18}
							onClick={onLogout}
							className="hover:text-yellow-light hover:scale-110 ease-in-out duration-200 cursor-pointer"
						/>
						<Button small className="hover:text-yellow-light">
							Profile
						</Button>
					</>
				) : (
					<>
						<Button
							onClick={onLogin}
							small
							className="hover:text-yellow-light "
						>
							Sign in
						</Button>
						<Button
							secLight
							outline
							small
							className="hover:bg-yellow-light hover:!text-dark "
						>
							Get Started
						</Button>
					</>
				)}
			</div>
		</nav>
	)
}

export default Navbar
