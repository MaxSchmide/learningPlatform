import toast from "react-hot-toast"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { RootState } from "../store"

type Props = {
	children: JSX.Element
}

const PrivateRoute = ({ children }: Props) => {
	const { user } = useSelector((state: RootState) => state.auth)
	return (
		<>
			{user
				? children
				: (toast.error("Need authorization"), (<Navigate to="/" />))}
		</>
	)
}

export default PrivateRoute
