import { useState } from "react"
import { ImQuotesRight } from "react-icons/im"
import {
	TbBrowser,
	TbChartDots,
	TbChevronLeft,
	TbChevronRight,
	TbTools,
} from "react-icons/tb"
import pers1 from "../images/testimonials_pers1.svg"
import pers2 from "../images/testimonials_pers2.svg"
import pers3 from "../images/testimonials_pers3.svg"

type Props = {
	testimonials?: boolean
}

const Testimonials = ({ testimonials }: Props) => {
	const [selectedActive, setSelectedActive] = useState(1)
	const handleRightClick = () => {
		if (selectedActive === 3) return
		setSelectedActive((prev) => prev + 1)
	}
	const handleLeftClick = () => {
		if (selectedActive === 1) return
		setSelectedActive((prev) => prev - 1)
	}

	const categoriesHeading = (
		<>
			Fostering a playful & engaging <br /> learning environment
		</>
	)
	const testimonialsHeading = "People say about learning"
	const categoriesLabel = "Our categories"
	const testimonialsLabel = "Testimonials"
	const testimonialsParagraph = (
		<p className="text-body2 text-grey">
			Global learning platform that provides international quality learning
		</p>
	)
	const categoriesCards = (
		<>
			<div
				className={`shadow-3xl rounded-xl ease-in duration-200 py-10 px-8 w-[31%] md:w-full   ${
					selectedActive === 1 && "bg-blue"
				}`}
			>
				<div className="flex items-center gap-5 mb-6">
					<span
						className={`p-3 rounded-lg bg-blue bg-opacity-10 inline-block text-blue ${
							selectedActive === 1 && "bg-white bg-opacity-100"
						}`}
					>
						<TbBrowser size={24} />
					</span>
					<h4
						className={`text-black text-h4 ${
							selectedActive === 1 && "!text-white"
						} `}
					>
						Web Development
					</h4>
				</div>
				<p
					className={` text-body2 text-grey ${
						selectedActive === 1 && "!text-white"
					}`}
				>
					Classes in development that cover the most recent advancements in web.
				</p>
			</div>
			<div
				className={`shadow-3xl rounded-xl ease-in duration-200 py-10 px-8 w-[31%] md:w-full  ${
					selectedActive === 2 && "bg-blue"
				}`}
			>
				<div className="flex items-center gap-5 mb-6">
					<span
						className={`p-3 rounded-lg bg-blue bg-opacity-10 inline-block text-blue ${
							selectedActive === 2 && "bg-white bg-opacity-100"
						}`}
					>
						<TbTools size={24} />
					</span>
					<h4
						className={`text-black text-h4 ${
							selectedActive === 2 && "!text-white"
						} `}
					>
						User Experience
					</h4>
				</div>
				<p
					className={`text-body2 text-grey  ${
						selectedActive === 2 && "!text-white"
					}`}
				>
					Lessons on design that cover the most recent developments.
				</p>
			</div>
			<div
				className={`shadow-3xl rounded-xl ease-in duration-200 py-10 px-8 w-[31%] md:w-full  ${
					selectedActive === 3 && "bg-blue"
				}`}
			>
				<div className="flex items-center gap-5 mb-6">
					<span
						className={`p-3 rounded-lg bg-blue bg-opacity-10 inline-block text-blue ${
							selectedActive === 3 && "bg-white bg-opacity-100"
						}`}
					>
						<TbChartDots size={24} />
					</span>
					<h4
						className={`text-black text-h4 ${
							selectedActive === 3 && "!text-white"
						} `}
					>
						Marketing
					</h4>
				</div>
				<p
					className={`text-body2 text-grey  ${
						selectedActive === 3 && "!text-white"
					}`}
				>
					Marketing courses that cover the most recent marketing trends
				</p>
			</div>
		</>
	)
	const testimonialsCards = (
		<>
			<div
				className={`${
					selectedActive === 1 && "shadow-box border-none"
				} border-black border-opacity-10 border rounded-xl  ease-in duration-200 py-8 px-7  w-[31%] md:w-full `}
			>
				<span
					className={`bg-opacity-10 mb-6 inline-block text-grey ${
						selectedActive === 1 && "!text-blue"
					}`}
				>
					<ImQuotesRight size={20} />
				</span>
				<p className="text-body2 text-grey mb-6">
					I`ve been with learningPlatform in 1 year, I got a lot of new skills.
					I`m very happy with learningPlatform.
				</p>
				<div className="flex items-center gap-3">
					<img src={pers1} alt="avatar" />
					<p className="text-body2-bold">Viezh Robert</p>
				</div>
			</div>
			<div
				className={`${
					selectedActive === 2 && "shadow-box border-none"
				} border-black border-opacity-10 border rounded-xl  ease-in duration-200 py-8 px-7  w-[31%] md:w-full `}
			>
				<span
					className={`bg-opacity-10 mb-6 inline-block text-grey ${
						selectedActive === 2 && "!text-blue"
					}`}
				>
					<ImQuotesRight size={20} />
				</span>
				<p className="text-body2 text-grey mb-6">
					With this learningPlatform I can learn easily and got updated course
					from teachers. This is the most helpful project.
				</p>
				<div className="flex items-center gap-3">
					<img src={pers2} alt="avatar" />
					<p className="text-body2-bold">Yessica Christy</p>
				</div>
			</div>
			<div
				className={`${
					selectedActive === 3 && "shadow-box border-none"
				} border-black border-opacity-10 border rounded-xl  ease-in duration-200 py-8 px-7 w-[31%] md:w-full  `}
			>
				<span
					className={`bg-opacity-10 mb-6 inline-block text-grey ${
						selectedActive === 3 && "!text-blue"
					}`}
				>
					<ImQuotesRight size={20} />
				</span>
				<p className="text-body2 text-grey mb-6">
					I got a lot of new skills here with a really professional specialists.
					I got a lot of energy I can learn anything.
				</p>
				<div className="flex items-center gap-3">
					<img src={pers3} alt="avatar" />
					<p className="text-body2-bold">Kim Young Jou</p>
				</div>
			</div>
		</>
	)

	const heading = testimonials ? testimonialsHeading : categoriesHeading
	const label = testimonials ? testimonialsLabel : categoriesLabel
	const paragraph = testimonials ? testimonialsParagraph : null
	const cards = testimonials ? testimonialsCards : categoriesCards

	return (
		<section className=" px-25 py-24 ">
			<div className="relative mb-14">
				<p className="label mb-4">{label}</p>
				<h3 className="text-h3 mb-6 ">{heading}</h3>
				{paragraph}
				<div className="absolute bottom-0 right-0 flex gap-6 md:flex-col">
					<TbChevronLeft onClick={handleLeftClick} className="arrows--blue" />

					<TbChevronRight onClick={handleRightClick} className="arrows--blue" />
				</div>
			</div>
			<div className="flex justify-between mb-9 md:flex-col md:gap-10">
				{cards}
			</div>
			<div className="flex justify-center items-center gap-1 ">
				<span
					className={`w-2 h-2 rounded-full inline-block bg-grey duration-200 ${
						selectedActive === 1 && "w-6 !bg-blue"
					}`}
				/>
				<span
					className={`w-2 h-2 rounded-full inline-block bg-grey duration-200 ${
						selectedActive === 2 && "w-6 !bg-blue"
					}`}
				/>
				<span
					className={`w-2 h-2 rounded-full inline-block bg-grey duration-200 ${
						selectedActive === 3 && "w-6 !bg-blue"
					}`}
				/>
			</div>
		</section>
	)
}

export default Testimonials
