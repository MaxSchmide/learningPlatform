import { TbFlame, TbPlayerPlay, TbRocket, TbSchool } from "react-icons/tb"

const Features = () => {
	return (
		<section className="p-25 bg-black bg-opacity-5">
			<div className="flex gap-20 md:flex-col">
				<div>
					<p className="label mb-4">Our adventage features</p>
					<h3 className="text-h3 	mb-6">Why must choose learningPlatform</h3>
					<p className="text-body2 text-grey pb-9 border-b-2 border-black border-opacity-10">
						LearningPlatform is biggest platform to learnin ganything to improve
						your skill with 350+ online video course
					</p>
					<div className="flex gap-9 mt-9">
						<div>
							<h4 className="text-h4">350K+</h4>
							<p className="text-body3 text-grey">Courses</p>
						</div>
						<div>
							<h4 className="text-h4">16</h4>
							<p className="text-body3 text-grey">Categories</p>
						</div>
						<div>
							<h4 className="text-h4">20K+</h4>
							<p className="text-body3 text-grey">Students</p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 gap-8  ">
					<div className="features__card group">
						<TbFlame className="features__icon" />
						<div className="w-[70%]">
							<p className="text-body1-bold mb-1">Lifetime Access</p>
							<p className="text-body2 text-grey">
								Only buy one time you can watch it anytime, any where, lorem
								ipsum dolot sit amet
							</p>
						</div>
					</div>
					<div className="features__card group">
						<TbSchool className="features__icon" />
						<div className="w-[70%]">
							<p className="text-body1-bold mb-1">Expert Teachers</p>
							<p className="text-body2 text-grey">
								Only buy one time you can watch it anytime, any where, lorem
								ipsum dolot sit amet
							</p>
						</div>
					</div>
					<div className="features__card group">
						<TbRocket className="features__icon" />
						<div className="w-[70%]">
							<p className="text-body1-bold mb-1">Practical Learning</p>
							<p className="text-body2 text-grey">
								Only buy one time you can watch it anytime, any where, lorem
								ipsum dolot sit amet
							</p>
						</div>
					</div>
					<div className="features__card group">
						<TbPlayerPlay className="features__icon" />
						<div className="w-[70%]">
							<p className="text-body1-bold mb-1">Video Lessons</p>
							<p className="text-body2 text-grey">
								Only buy one time you can watch it anytime, any where, lorem
								ipsum dolot sit amet
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
