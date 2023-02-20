import { useState } from "react"
import {
	TbChevronDown,
	TbClock,
	TbFileText,
	TbPlayerPlay,
} from "react-icons/tb"
import { Link, useParams } from "react-router-dom"
import { Section } from "../models/api.model"
import { toHoursAndMinutes } from "../utils"

type Props = {
	items?: Section[]
}

const Accordion = ({ items }: Props) => {
	const { id, param } = useParams()

	const matches = param?.match(/\d+/g)
	const indexOfSection = Number(matches?.[0])
	const indexOfLesson = Number(matches?.[1])

	const [expandedIndex, setExpandedIndex] = useState(indexOfSection)
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
			const isSelected =
				lessonIndex === indexOfLesson && sectionIndex === indexOfSection
			return (
				<div key={lessonIndex} className="flex gap-4 items-start mb-6  ">
					<span
						className={`text-grey inline-block p-2 bg-grey-light rounded-full ${
							isSelected && "bg-yellow-light text-dark"
						}`}
					>
						{lesson.type === "video" ? (
							<TbPlayerPlay size={24} />
						) : (
							<TbFileText size={24} />
						)}
					</span>
					<div>
						<p
							className={`text-body2 mb-1 duration-200 ease-in hover:text-blue ${
								isSelected && "font-bold text-dark"
							}`}
						>
							<Link to={`/course/${id}/S${sectionIndex}L${lessonIndex}`}>
								{lessonIndex + 1}. &nbsp; {lesson.name}
							</Link>
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
