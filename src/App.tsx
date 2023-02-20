import { Toaster } from "react-hot-toast"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Coursepage from "./pages/Coursepage"
import Homepage from "./pages/Homepage"
import Lessonpage from "./pages/Lessonpage"
import Searchpage from "./pages/Searchpage"
import PrivateRoute from "./routes/PrivateRoute"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/browse",
		element: (
			<PrivateRoute>
				<Searchpage />
			</PrivateRoute>
		),
	},
	{
		path: "/course/:id",
		element: (
			<PrivateRoute>
				<Coursepage />
			</PrivateRoute>
		),
	},
	{
		path: "/course/:id/:param",
		element: (
			<PrivateRoute>
				<Lessonpage />
			</PrivateRoute>
		),
	},
])

const App = () => {
	return (
		<div className="container">
			<Toaster />
			<RouterProvider router={router} />
		</div>
	)
}

export default App
