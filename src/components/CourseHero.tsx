import { Rating } from "@mui/material"
import { useState } from "react"
import { MdOutlineStarOutline } from "react-icons/md"
import {
	TbArrowBarToDown,
	TbFileCertificate,
	TbFileText,
	TbPlayerPlay,
	TbX,
} from "react-icons/tb"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { toHoursAndMinutes } from "../utils"
import Button from "./Button"
import Skeleton from "./Skeleton"

const CourseHero = () => {
	const [isPreviewClicked, setIsPreviewClicked] = useState(false)
	const { selectedCourse, isLoading, sections } = useSelector(
		(state: RootState) => state.courses
	)

	const numOfArticles = sections
		.map((lesson) => lesson.data?.filter((i) => i.type === "article"))
		.reduce((acc, element) => acc + element!.length, 0)

	const courseMinutes = sections
		.map((item) =>
			item.data!.reduce((acc, element) => acc + element.duration, 0)
		)
		.reduce((acc, el) => acc + el, 0)
	const courseDuration = toHoursAndMinutes(courseMinutes!)

	const handleClick = () => {
		setIsPreviewClicked(!isPreviewClicked)
	}

	return (
		<>
			{isLoading ? (
				<Skeleton times={1} className="w-full h-screen" />
			) : (
				<div className=" px-25 py-18 flex md:flex-col justify-between text-white">
					<div className="w-1/2 md:w-full mb-12">
						<h3 className="text-h3 mb-6 ">{selectedCourse?.title}</h3>
						<p className="text-body2 w-2/3">{selectedCourse?.subtitle}</p>
						<div className="py-12 flex gap-8 items-center border-b border-white border-opacity-10">
							<Button medium secLight>
								Enroll for free
							</Button>
							<div className="flex gap-2 items-center">
								<p className="text-body2-bold text-yellow-light">
									{selectedCourse?.rating}
								</p>
								<Rating
									name="half-rating-read"
									defaultValue={selectedCourse?.rating}
									precision={0.1}
									size="small"
									style={{ color: "#F2C94C" }}
									emptyIcon={
										<MdOutlineStarOutline
											fontSize="inherit"
											style={{ color: "#F2C94C" }}
										/>
									}
									readOnly
								/>
							</div>
							<p className="text-body2">{selectedCourse?.author}</p>
						</div>
						<div className="mt-12">
							<h4 className="text-h4 mb-8">This course includes:</h4>
							<div className="grid grid-cols-2 grid-rows-2 gap-y-6 gap-x-17">
								<div className="flex items-center gap-4">
									<TbPlayerPlay className="text-grey" size={24} />
									<p className="text-body2">{courseDuration} on-demand video</p>
								</div>
								<div className="flex items-center gap-4">
									<TbArrowBarToDown className="text-grey" size={24} />
									<p className="text-body2">10 downloadable resources</p>
								</div>
								<div className="flex items-center gap-4">
									<TbFileText className="text-grey" size={24} />
									<p className="text-body2">
										{numOfArticles}&nbsp;
										{numOfArticles === 1 ? "article" : "articles"}
									</p>
								</div>
								<div className="flex items-center gap-4">
									<TbFileCertificate className="text-grey" size={24} />
									<p className="text-body2">Certificate of completion</p>
								</div>
							</div>
						</div>
					</div>
					<div
						className={`${
							isPreviewClicked &&
							"fixed flex justify-center items-center inset-0 bg-black bg-opacity-80 z-10 "
						} duration-200 ease-in-out  `}
					>
						{isPreviewClicked && (
							<span
								onClick={handleClick}
								className="inline-block absolute top-10 right-10 text-yellow-light cursor-pointer"
							>
								<TbX size={56} />
							</span>
						)}
						<div
							className={`w-[27.5rem] h-[18rem] md:mx-auto relative duration-300 ease-in-out  ${
								isPreviewClicked && "scale-200"
							} `}
						>
							<img
								src={selectedCourse?.previewURL}
								alt="Course preview"
								className={`w-full object-cover -z-10 ${
									!isPreviewClicked && "brightness-50 "
								}  `}
							/>
							{!isPreviewClicked && (
								<Button
									medium
									secLight
									outline
									className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:!text-dark hover:bg-yellow-light "
									onClick={handleClick}
								>
									<span className="items-center flex gap-3">
										<TbPlayerPlay size={24} />
										<p>Watch preview</p>
									</span>
								</Button>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default CourseHero
