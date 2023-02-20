import { TbCheck, TbClock, TbFolder, TbPlayerPlay } from "react-icons/tb"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { toHoursAndMinutes } from "../utils"
import Accordion from "./Accordion"
import Skeleton from "./Skeleton"

const CourseContent = () => {
	const { selectedCourse, isLoading, sections } = useSelector(
		(state: RootState) => state.courses
	)
	const numOfLessons = sections.reduce(
		(acc, element) => acc + element.data!.length,
		0
	)
	const courseMinutes = sections
		.map((item) =>
			item.data!.reduce((acc, element) => acc + element.duration, 0)
		)
		.reduce((acc, el) => acc + el, 0)
	const courseDuration = toHoursAndMinutes(courseMinutes!)

	return (
		<>
			{isLoading ? (
				<Skeleton times={1} className="w-full h-screen" />
			) : (
				<>
					<section className="relative mx-25 py-18 border-b border-black border-opacity-10 ">
						<div className="md:static md:w-full md:mb-8 w-[27.5rem] absolute right-0 top-10 rounded-xl bg-grey-light p-8">
							<h4 className="text-h4 mb-8">What you`ll learn</h4>
							{selectedCourse?.features?.map((ft, i) => (
								<div key={i} className="flex gap-3 mb-6">
									<span>
										<TbCheck className="text-grey" size={24} />
									</span>
									<p className="text-body2">{ft}</p>
								</div>
							))}
						</div>
						<div className="w-1/2 md:w-full">
							<h4 className="text-h4 mb-3">Course content</h4>
							<div className="flex gap-4 text-grey text-body3">
								<div className="flex gap-2 items-center">
									<TbFolder />
									<p>{sections.length} sections</p>
								</div>
								<div className="flex gap-2 items-center">
									<TbPlayerPlay />
									<p>{numOfLessons}&nbsp; lessons</p>
								</div>
								<div className="flex gap-2 items-center">
									<TbClock />
									<p>{courseDuration}</p>
								</div>
							</div>
							<Accordion items={sections} />
						</div>
					</section>
					<section className="pl-25 pt-12 pb-18 w-1/2">
						<h4 className="text-h4 mb-8">Description</h4>
						{selectedCourse?.description}
					</section>
				</>
			)}
		</>
	)
}

export default CourseContent
