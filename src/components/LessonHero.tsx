import { useEffect, useState } from "react"
import { TbClock, TbPlayerPlay, TbX } from "react-icons/tb"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { RootState } from "../store"
import Button from "./Button"
import LessonModal from "./LessonModal"
import Skeleton from "./Skeleton"

const LessonHero = () => {
	const { id, param } = useParams()
	const { selectedCourse, sections, isLoading } = useSelector(
		(state: RootState) => state.courses
	)
	const [isModalShow, setIsModalShow] = useState(false)
	const [isPreviewClicked, setIsPreviewClicked] = useState(false)
	const navigate = useNavigate()
	const matches = param?.match(/\d+/g)
	const indexOfSection = Number(matches?.[0])
	const indexOfLesson = Number(matches?.[1])

	const selectedSection = sections?.find(
		(section, sectionIndex) => sectionIndex === indexOfSection
	)
	const nextSection = sections?.find(
		(section, sectionIndex) => sectionIndex === indexOfSection + 1
	)

	const selectedLesson = selectedSection?.data?.find(
		(lesson, lessonIndex) => lessonIndex === indexOfLesson
	)

	let nextLesson, lessonIndex

	if (indexOfLesson + 1 === selectedSection?.data?.length) {
		nextLesson = nextSection?.data?.find(
			(lesson, lessonIndex) => lessonIndex === 0
		)
		lessonIndex = 1
	} else {
		nextLesson = selectedSection?.data?.find(
			(lesson, lessonIndex) => indexOfLesson + 1 === lessonIndex
		)
		lessonIndex = indexOfLesson + 2
	}

	const isArticle = selectedLesson?.type === "article"

	const handleClick = () => {
		setIsPreviewClicked(!isPreviewClicked)
	}
	const handleShowLessonClick = () => {
		setIsModalShow(!isModalShow)
	}
	const handleNextLessonClick = () => {
		let lesson, section
		if (indexOfLesson + 1 === selectedSection?.data?.length) {
			lesson = 0
			section = indexOfSection + 1
		} else {
			lesson = indexOfLesson + 1
			section = indexOfSection
		}
		navigate(`/course/${id}/S${section}L${lesson}`)
	}

	useEffect(() => {
		return () => setIsModalShow(false)
	}, [param])

	return (
		<div className="px-25 py-18 relative ">
			{isLoading ? (
				<Skeleton times={1} className="w-full h-screen" />
			) : (
				<>
					<LessonModal
						isShow={isModalShow}
						handleShow={handleShowLessonClick}
					/>
					<div className={` ${isArticle ? "w-full" : "w-[35%] md:w-4/5"}`}>
						<div className="flex justify-between items-start">
							<h3 className="text-h3 mb-12 text-white">
								{selectedCourse?.title}
							</h3>
							{isArticle && (
								<Button
									outline
									secLight
									medium
									className="whitespace-nowrap ml-10 hover:bg-yellow-light hover:text-dark"
									onClick={handleShowLessonClick}
								>
									Show lessons
								</Button>
							)}
						</div>
						<div className="flex justify-between items-center">
							<div className={`${isArticle ? "w-2/3" : "md:w-1/2"}`}>
								<p className="text-body2 text-grey mb-3">
									{isArticle
										? `Section ${indexOfSection + 1}`
										: `${selectedSection?.name}`}
									&nbsp;· Lesson {indexOfLesson + 1}
								</p>
								<h4 className="text-h4 text-white mb-6">
									{selectedLesson?.name}
								</h4>
								<p className="text-body2 text-grey">
									{selectedCourse?.description?.slice(0, 200)}
								</p>
							</div>
							{isArticle && (
								<div className="rounded-xl border border-grey p-6 border-opacity-10 flex justify-between items-start ml-20">
									<div className="w-1/2">
										<p className="text-body3 text-grey mb-1">
											Next · Lesson {lessonIndex}
										</p>
										<p className="text-body3 text-white mb-4">
											{nextLesson?.name}
										</p>
										<span className="flex gap-2 items-center text-grey">
											<TbClock />
											<p>{nextLesson?.duration} min</p>
										</span>
									</div>
									<Button
										onClick={handleNextLessonClick}
										outline
										medium
										className="text-white whitespace-nowrap hover:bg-white hover:text-dark"
									>
										Next lesson
									</Button>
								</div>
							)}
						</div>
					</div>
					{!isArticle && (
						<>
							{!isPreviewClicked && (
								<div className="flex justify-end mb-20 absolute right-25 top-18">
									<Button
										outline
										secLight
										medium
										className="hover:bg-yellow-light hover:text-dark"
										onClick={handleShowLessonClick}
									>
										Show lessons
									</Button>
								</div>
							)}
							<div
								className={`absolute right-18 -bottom-24 ${
									isPreviewClicked &&
									"!fixed flex justify-center items-center !inset-0 bg-black bg-opacity-80 z-10 "
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
									className={`relative duration-300 ease-in-out  ${
										isPreviewClicked && "scale-110"
									} `}
								>
									<iframe
										className="w-[44rem] h-[25rem] md:w-[33rem]"
										src="https://www.youtube.com/embed/-HJ0ZGkdlTk"
										title="YouTube video player"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									/>
									{!isPreviewClicked && (
										<Button
											large
											secLight
											className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
											onClick={handleClick}
										>
											<span className="items-center flex gap-3">
												<TbPlayerPlay size={24} />
												<p>Watch video</p>
											</span>
										</Button>
									)}
								</div>
							</div>
						</>
					)}
				</>
			)}
		</div>
	)
}

export default LessonHero
