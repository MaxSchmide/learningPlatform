import { TbSearch } from "react-icons/tb"
import CategoriesBar from "./CategoriesBar"

const SearchBar = () => {
	return (
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
			<CategoriesBar />
		</div>
	)
}

export default SearchBar
