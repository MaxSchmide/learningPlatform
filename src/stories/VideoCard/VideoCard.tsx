import { Rating } from "@mui/material"
import { MdOutlineStarOutline } from "react-icons/md"
import { TbPlayerPlay, TbUser } from "react-icons/tb"

interface Lesson {
	duration: number
	name: string
	type: string
}

interface Section {
	data: Lesson[]
	name: string
}

interface Course {
	author: string
	description: string
	features: string[]
	id: string
	isPopular: boolean
	previewURL: string
	rating: number
	sections: Section[]
	subtitle: string
	title: string
}
interface Props {
	item: Course
	home?: boolean
	onVideoClick?: () => void
}

const VideoCard = ({ item, onVideoClick, home }: Props) => {
	const numOfLessons = item.sections.reduce(
		(acc: number, element: Section) => acc + element.data!.length,
		0
	)

	return (
		<div className="w-[22%] md:w-2/5">
			<div className="relative mb-4 cursor-pointer" onClick={onVideoClick}>
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
					style={{ color: `${home ? "#F2C94C" : "#E3AD09"}` }}
					emptyIcon={
						<MdOutlineStarOutline
							fontSize="inherit"
							style={{ color: `${home ? "#F2C94C" : "#E3AD09"}` }}
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
						{item.sections.length && (
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
