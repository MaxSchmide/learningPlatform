import { useState } from "react"
import {
	TbChevronDown,
	TbClock,
	TbFileText,
	TbPlayerPlay,
} from "react-icons/tb"
import { toHoursAndMinutes } from "../../utils"

interface Lesson {
	duration: number
	name: string
	type: string
}

interface Section {
	data: Lesson[]
	name: string
}
type Props = {
	items?: Section[]
}

const Accordion = ({ items }: Props) => {
	const [expandedIndex, setExpandedIndex] = useState(-1)
	const handleClick = (nextIndex: number) => {
		setExpandedIndex((current) => {
			return current === nextIndex ? -1 : nextIndex
		})
	}
	const renderedItems = items?.map((item: Section, sectionIndex) => {
		const isExpanded = sectionIndex === expandedIndex

		const sectionDurationMinutes = item.data?.reduce(
			(acc, element) => acc + element.duration,
			0
		)
		const sectionDuration = toHoursAndMinutes(sectionDurationMinutes!)

		const content = item.data?.map((lesson, lessonIndex) => {
			return (
				<div key={lessonIndex} className="flex gap-4 items-start mb-6  ">
					<span
						className={`text-grey inline-block p-2 bg-grey-light rounded-full`}
					>
						{lesson.type === "video" ? (
							<TbPlayerPlay size={24} />
						) : (
							<TbFileText size={24} />
						)}
					</span>
					<div>
						<p
							className={`text-body2 mb-1 duration-200 ease-in cursor-pointer hover:text-blue`}
						>
							{lessonIndex + 1}. &nbsp; {lesson.name}
						</p>
						<div className="flex gap-2 items-center text-grey">
							<TbClock />
							<p className="text-body3">{lesson.duration} min</p>
						</div>
					</div>
				</div>
			)
		})
		return (
			<div
				key={sectionIndex}
				className="border-b border-black border-opacity-10 "
			>
				<div
					className="flex justify-between py-6  items-center cursor-pointer"
					onClick={() => handleClick(sectionIndex)}
				>
					<div>
						<h5 className="text-h5 mb-3">{item.name}</h5>
						<div className="flex gap-4 text-grey text-body3">
							<div className="flex gap-2 items-center">
								<TbPlayerPlay />
								<p>{item.data?.length} lessons</p>
							</div>
							<div className="flex gap-2 items-center">
								<TbClock />
								<p>{sectionDuration}</p>
							</div>
						</div>
					</div>
					<span
						className={`text-xl text-grey ease-in-out duration-200 ${
							isExpanded && "rotate-180"
						}`}
					>
						<TbChevronDown />
					</span>
				</div>
				{isExpanded && <div>{content}</div>}
			</div>
		)
	})

	return <div>{renderedItems}</div>
}

export default Accordion
