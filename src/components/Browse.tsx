import { collection, getDocs, query, where } from "firebase/firestore"
import { useCallback, useEffect, useState } from "react"
import { db } from "../firebase"
import { ICourse } from "../models/api.model"
import Skeleton from "./Skeleton"
import VideoCard from "./VideoCard"

type Props = {
	type: "recommended" | "top" | "viewing"
}

const Browse = ({ type }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [categoriedVideos, setCategoriedVideos] = useState<ICourse[]>([])

	const fetchCategoriedVideos = useCallback(async () => {
		const q = query(collection(db, "courses"), where("tag", "==", type))
		const querySnapshot = await getDocs(q)
		const result: ICourse[] = []
		querySnapshot.forEach((course) =>
			result.push({
				id: course.id,
				...course.data(),
			})
		)
		setCategoriedVideos(result)
	}, [db])
	useEffect(() => {
		fetchCategoriedVideos()
	}, [fetchCategoriedVideos])

	const handleClick = () => {
		setIsExpanded(!isExpanded)
	}

	const topHeading = (
		<>
			Top courses in <span className="text-blue">Development</span>
		</>
	)
	const viewedHeading = "Students are viewing"
	const recHeading = "Recommended for you"

	const heading =
		type === "top"
			? topHeading
			: type === "viewing"
			? viewedHeading
			: recHeading

	return (
		<div className="mb-24">
			<div className="flex justify-between mb-8">
				<h4 className="text-h4">{heading}</h4>
				{categoriedVideos.length > 4 && (
					<button
						onClick={handleClick}
						className="rounded text-blue text-body3-bold py-2 px-6 bg-grey-light"
					>
						Explore all
					</button>
				)}
			</div>
			<div className="flex gap-8 flex-wrap md:justify-center md:gap-20">
				{categoriedVideos.length ? (
					isExpanded ? (
						categoriedVideos.map((item) => (
							<VideoCard item={item} key={item.id} />
						))
					) : (
						categoriedVideos
							.slice(0, 4)
							.map((item) => <VideoCard item={item} key={item.id} />)
					)
				) : (
					<Skeleton times={4} className="w-[22%] h-64" />
				)}
			</div>
		</div>
	)
}

export default Browse
