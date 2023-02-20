import { useSelector } from "react-redux"
import { RootState } from "../store"
import Button from "./Button"
import CategoriesBar from "./CategoriesBar"
import Skeleton from "./Skeleton"
import VideoCard from "./VideoCard"

const Categories = () => {
	const { data, isLoading } = useSelector((state: RootState) => state.courses)
	return (
		<section className="background p-25" id="categories">
			<header>
				<p className="label mb-4">Categories</p>
				<h3 className="text-h3 text-white	mb-20">
					Train your team with real world
					<br />
					skills and knowledge
				</h3>
			</header>
			<div className="mb-14">
				<CategoriesBar />
			</div>
			<div className="flex justify-between flex-wrap mb-12 md:gap-10 md:justify-center">
				{isLoading ? (
					<Skeleton times={4} className="w-[22%] h-64" />
				) : (
					data?.map((item) => <VideoCard key={item.id} item={item} />)
				)}
			</div>
			<div className="flex gap-2 md:justify-center">
				<Button medium secLight>
					Get Started
				</Button>
				<Button medium className="text-yellow-light">
					Learn More
				</Button>
			</div>
		</section>
	)
}

export default Categories
