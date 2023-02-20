import { TbBriefcase, TbBulb, TbDeviceLaptop, TbUsers } from "react-icons/tb"
import left_circle from "../images/hero_circle_left.svg"
import right_circle from "../images/hero_circle_right.svg"
import circle from "../images/hero_icon.svg"
import hero from "../images/hero_image.svg"
import Button from "./Button"

const Hero = () => {
	return (
		<section className="px-25 py-18 relative">
			<img src={left_circle} alt="circle" className="absolute left-0 top-24" />
			<img
				src={right_circle}
				alt="circle"
				className="absolute bottom-0 right-0"
			/>
			<div className="w-[40%] md:w-full">
				<p className="label mb-6">Education</p>
				<h1 className="text-h1 text-white mb-5">
					Learn anything to improve your skills
				</h1>
				<p className="text-body2 text-grey mb-14">
					LearningPlatform is an online learning site that provides tens <br />
					of thousands of classes with experienced instructions.
				</p>
				<div className="flex gap-9  mb-18">
					<div className="flex items-center gap-5">
						<span className="hero__icon">
							<TbBriefcase size={24} />
						</span>
						<span className="text-white text-body2-bold ">Career-Oriented</span>
					</div>
					<div className="flex items-center gap-5">
						<span className="hero__icon">
							<TbBulb size={24} />
						</span>
						<span className="text-white text-body2-bold">
							Creative Thinking
						</span>
					</div>
				</div>
				<div className="flex mb-6">
					<Button secLight large className="text-body1-extrabold ">
						Get Started
					</Button>
					<Button large className="text-yellow-light">
						Learn more
					</Button>
				</div>
			</div>
			<div className="absolute right-25 bottom-16 md:static md:flex md:justify-end">
				<div className="relative bg-blue rounded-full w-[31rem] h-[31rem] mt-4">
					<div className="rounded-full w-8 h-8 bg-blue bg-opacity-50 absolute bottom-7 left-1 " />
					<div className="absolute -left-5 -top-5 border border-blue rounded-full w-[31rem] h-[31rem]" />
					<img src={hero} alt="young student" className="absolute bottom-0 " />
					<div className="hero__item -left-[20%] top-1/3  items-center">
						<span className="hero__icon">
							<TbDeviceLaptop size={22} />
						</span>
						<span>
							<h4 className="text-h4 text-white">2K+</h4>
							<p className="text-body3 text-grey">Video courses</p>
						</span>
					</div>
					<div className="hero__item bottom-10 -right-3  items-center">
						<span className="hero__icon">
							<TbUsers size={22} />
						</span>
						<span>
							<h4 className="text-h4 text-white ">250+</h4>
							<p className="text-body3 text-grey">Tutors</p>
						</span>
					</div>
					<div className="hero__item flex-col -right-4 -top-5 items-center">
						<img src={circle} alt="" />
						<span className="text-center">
							<h4 className="text-h4 text-white ">5K+</h4>
							<p className="text-body3 text-grey">Online Courses</p>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
