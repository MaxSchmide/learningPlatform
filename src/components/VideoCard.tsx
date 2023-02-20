import Rating from "@mui/material/Rating"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useCallback, useEffect, useState } from "react"
import { MdOutlineStarOutline } from "react-icons/md"
import { TbPlayerPlay, TbUser } from "react-icons/tb"
import { useLocation, useNavigate } from "react-router-dom"
import { db } from "../firebase"
import { ICourse, Section } from "../models/api.model"

type Props = {
	item: ICourse
}

const VideoCard = ({ item }: Props) => {
	const [sections, setSections] = useState<Section[]>([])
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const home = pathname === "/"
	const numOfLessons = sections?.reduce(
		(acc: number, element: Section) => acc + element.data!.length,
		0
	)

	const fetchSections = useCallback(async () => {
		const q = query(collection(db, "lessons"), where("courseID", "==", item.id))
		const querySnapshot = await getDocs(q)
		const result: Section[] = []
		querySnapshot.forEach((section) => {
			result.push({ courseID: item.id, ...section.data() })
		})
		setSections(result)
	}, [])
	useEffect(() => {
		fetchSections()
	}, [fetchSections])

	const handleClick = () => {
		navigate(`/course/${item.id}`)
	}

	return (
		<div className="w-[22%] md:w-2/5">
			<div className="relative mb-4 cursor-pointer" onClick={handleClick}>
				<img src={item.previewURL} alt="course logo" className="w-full" />
				{item.isPopular && (
					<span className="inline-block absolute top-4 left-4 py-1 px-4 rounded-3xl bg-blue text-white text-body3">
						Popular
					</span>
				)}
			</div>
			<div className="flex gap-2 mb-2 select-none items-center">
				<p
					className={`text-body2-bold text-yellow md:text-2xl ${
						home && "!text-yellow-light"
					}`}
				>
					{item.rating}
				</p>
				<Rating
					className="md:!text-2xl"
					name="half-rating-read"
					defaultValue={item.rating}
					precision={0.1}
					size="small"
					style={{ color: `${home && "#F2C94C"}` }}
					emptyIcon={
						<MdOutlineStarOutline
							fontSize="inherit"
							color="#E3AD09"
							style={{ color: `${home && "#F2C94C"}` }}
						/>
					}
					readOnly
				/>
			</div>
			<div>
				<p
					className={`text-body2-bold mb-1 line-clamp-2 cursor-pointer md:!text-2xl ${
						home && "text-white"
					}`}
				>
					{item.title}
				</p>
				<div className="flex gap-4 select-none">
					<div className="flex items-center gap-2 text-grey ">
						<TbUser size={14} />
						<p className="text-body3 md:!text-2xl"> {item.author}</p>
					</div>
					<div className="flex items-center gap-2 text-grey">
						{sections.length && (
							<>
								<TbPlayerPlay size={14} />
								<p className="text-body3 md:!text-2xl">
									{numOfLessons} lessons
								</p>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoCard
