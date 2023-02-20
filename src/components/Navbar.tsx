import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { TbSearch, TbUser } from "react-icons/tb"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { auth } from "../firebase"
import logo from "../images/favicon.svg"
import {
	RootState,
	authFail,
	authSuccess,
	logOut,
	useAppDispatch,
} from "../store"
import Button from "./Button"

const Navbar = () => {
	const { pathname } = useLocation()
	const { user } = useSelector((state: RootState) => state.auth)
	const dispatch = useAppDispatch()

	const logout = async () => {
		await signOut(auth)
		dispatch(logOut())
		sessionStorage.removeItem("lf-access-token")
		sessionStorage.removeItem("lf-profile")
	}
	const loginWithGoogle = async () => {
		try {
			const provider = new GoogleAuthProvider()
			provider.addScope("https://www.googleapis.com/auth/contacts.readonly")
			await signInWithPopup(auth, provider).then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential!.accessToken
				const profile = result.user.displayName!

				sessionStorage.setItem("lp-access-token", token!)
				sessionStorage.setItem("lp-profile", JSON.stringify(profile))
				dispatch(authSuccess({ token, profile }))
			})
		} catch (error) {
			dispatch(authFail(error))
		}
	}

	return (
		<nav className="relative h-20 md:h-25 px-25 flex justify-between items-center text-white border-b-2 border-white border-opacity-10">
			<div className="select-none">
				<Link to="/">
					<img
						src={logo}
						alt="logo"
						className="absolute left-16 top-6 md:!top-6 md:!left-16 lg:top-3 lg:left-8 "
					/>
				</Link>
				<p className="text-body2-extrabold md:hidden">learningPlatform</p>
			</div>
			<ul className="flex min-h-full">
				<Link to="/browse" className="menu__item">
					Browse
				</Link>
				<Link to="/#categories" className="menu__item">
					Categories
				</Link>
				<li className="menu__item">FAQ</li>
				{pathname !== "/browse" && (
					<Link to="/browse" className="menu__item">
						<TbSearch size={16} />
					</Link>
				)}
			</ul>
			<div className="flex gap-2 items-center">
				{user ? (
					<>
						<TbUser
							size={18}
							onClick={logout}
							className="hover:text-yellow-light hover:scale-110 ease-in-out duration-200 cursor-pointer"
						/>
						<Button small className="hover:text-yellow-light">
							Profile
						</Button>
					</>
				) : (
					<>
						<Button
							onClick={loginWithGoogle}
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
