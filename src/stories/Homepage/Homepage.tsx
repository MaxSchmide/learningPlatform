import { useRef, useState } from "react"
import {
	TbBrandFacebook,
	TbBrandInstagram,
	TbBrandYoutube,
	TbBriefcase,
	TbBulb,
	TbChevronLeft,
	TbChevronRight,
	TbDeviceLaptop,
	TbDevices,
	TbFlame,
	TbPlayerPlay,
	TbRocket,
	TbSchool,
	TbUserCheck,
	TbUsers,
} from "react-icons/tb"
import logo from "../../images/favicon.svg"
import left_circle from "../../images/hero_circle_left.svg"
import right_circle from "../../images/hero_circle_right.svg"
import blue_circle from "../../images/hero_icon.svg"
import hero from "../../images/hero_image.svg"
import circle from "../../images/semihero_circle.svg"
import "../../index.css"
import Button from "../Button/Button"
import Navbar from "../Navbar/Navbar"
import Testimonials from "../Testimonials/Testimonials"
import VideoCard from "../VideoCard/VideoCard"

type User = {
	name: string
}

const mockData = {
	author: "Berry Wooten",
	description:
		"Excepteur non eiusmod et cillum nulla adipisicing excepteur nisi. Consectetur occaecat velit eiusmod velit consequat. Ipsum ipsum dolore laborum esse ad. Proident ipsum aliquip incididunt aliquip. Esse fugiat sunt sint irure excepteur voluptate occaecat ut. Reprehenderit laboris ea in in. Eiusmod aute non ipsum et mollit labore consectetur fugiat ullamco aliqua consequat proident proident proident. Nisi fugiat consectetur laborum adipisicing officia. Consectetur culpa aute ad Lorem labore. Cupidatat magna et proident eiusmod adipisicing pariatur reprehenderit. Deserunt Lorem quis esse sunt eu. Pariatur duis consectetur est commodo quis ullamco pariatur duis aute Lorem aliquip cillum ut. Culpa fugiat duis dolor in Lorem consectetur fugiat eu. Nostrud Lorem fugiat officia veniam ad Lorem sit enim irure dolor velit aliquip consequat. Culpa deserunt mollit elit incididunt proident elit est nisi proident. Esse adipisicing non sunt in et sunt duis aliqua officia sint irure ipsum. Excepteur laboris reprehenderit amet nulla quis nulla enim ad ipsum consectetur incididunt. Anim excepteur occaecat laborum sunt est reprehenderit. Dolore elit et ex mollit ex veniam eu. Id culpa veniam nostrud nulla Lorem veniam esse ea et ullamco reprehenderit id ex reprehenderit.",
	features: [
		"Est nulla anim excepteur dolor eiusmod voluptate adipisicing quis.",
		"Eiusmod do exercitation aliquip excepteur qui id culpa.",
		"Id qui minim ipsum culpa minim.",
		"Ipsum enim magna voluptate incididunt do proident laborum Lorem nisi aliquip quis elit veniam tempor.",
		"Eu ipsum eu tempor ea elit non nostrud quis ea exercitation nisi labore culpa incididunt.",
	],
	id: "63d4006a24cbd041951b81df",
	isPopular: true,
	previewURL: "https://picsum.photos/seed/63d4006a3ba32eb2a07b026b/300/200",
	rating: 4.5,
	sections: [
		{
			data: [
				{
					duration: 1,
					name: "Fugiat excepteur adipisicing pariatur id labore sit.",
					type: "video",
				},
				{
					duration: 19,
					name: "Ex consectetur irure Lorem consectetur in ullamco occaecat occaecat voluptate ipsum sint fugiat.",
					type: "article",
				},
				{
					duration: 0,
					name: "Laboris dolore esse ex voluptate.",
					type: "video",
				},
				{
					duration: 2,
					name: "Quis laborum irure nulla eu sint in nisi exercitation dolore.",
					type: "article",
				},
				{
					duration: 12,
					name: "Eiusmod sint veniam aliquip labore sit culpa ut.",
					type: "video",
				},
				{
					duration: 2,
					name: "Anim duis voluptate voluptate cupidatat laborum.",
					type: "article",
				},
				{
					duration: 6,
					name: "Officia ad dolore eiusmod sunt aute.",
					type: "video",
				},
			],
			name: "Amet labore ex deserunt aliquip ad ex.",
		},
		{
			data: [
				{
					duration: 9,
					name: "Do occaecat incididunt voluptate nisi velit Lorem.",
					type: "video",
				},
				{
					duration: 5,
					name: "Occaecat cupidatat aliquip eiusmod amet duis velit.",
					type: "video",
				},
				{
					duration: 12,
					name: "Reprehenderit sit pariatur quis ad ad dolore velit.",
					type: "article",
				},
				{
					duration: 7,
					name: "Incididunt occaecat ex dolore qui aute.",
					type: "article",
				},
				{
					duration: 3,
					name: "Et cupidatat reprehenderit pariatur nisi eiusmod ullamco commodo ullamco sit laboris adipisicing.",
					type: "video",
				},
				{
					duration: 14,
					name: "Ullamco deserunt est cillum laborum ad fugiat veniam.",
					type: "video",
				},
				{
					duration: 7,
					name: "Voluptate laboris quis exercitation eu deserunt non consectetur in occaecat dolor.",
					type: "article",
				},
				{
					duration: 0,
					name: "Ad laborum sint esse deserunt do reprehenderit qui veniam dolor.",
					type: "article",
				},
			],
			name: "Do irure nisi in laboris consequat labore adipisicing anim nulla velit ad aliqua pariatur esse.",
		},
		{
			data: [
				{
					duration: 1,
					name: "Ut ullamco deserunt sit consequat duis mollit proident adipisicing irure aliqua culpa elit.",
					type: "video",
				},
				{
					duration: 12,
					name: "Aliquip in sit consectetur duis duis magna enim culpa qui.",
					type: "article",
				},
				{
					duration: 8,
					name: "Magna commodo qui officia reprehenderit minim amet dolor.",
					type: "article",
				},
				{
					duration: 2,
					name: "Aliqua adipisicing amet ad aliqua irure tempor velit culpa.",
					type: "video",
				},
				{
					duration: 8,
					name: "Ullamco irure pariatur duis labore anim sint cupidatat veniam minim laboris enim amet sit consequat.",
					type: "article",
				},
				{
					duration: 12,
					name: "Commodo duis amet officia non consequat labore duis officia dolor.",
					type: "video",
				},
				{
					duration: 16,
					name: "Velit cillum incididunt mollit eiusmod consequat eu in.",
					type: "article",
				},
				{
					duration: 4,
					name: "Aliquip et eu incididunt irure adipisicing duis.",
					type: "video",
				},
			],
			name: "Aliquip tempor voluptate eiusmod veniam fugiat ex officia anim dolore duis.",
		},
		{
			data: [
				{
					duration: 13,
					name: "Proident irure commodo tempor veniam commodo incididunt dolor enim aute.",
					type: "article",
				},
				{
					duration: 15,
					name: "Laboris laboris dolore aliqua amet reprehenderit eu.",
					type: "video",
				},
				{
					duration: 2,
					name: "Anim enim aute adipisicing incididunt.",
					type: "video",
				},
				{
					duration: 4,
					name: "Aliqua quis culpa dolor do laborum reprehenderit sit non et nisi dolore sit excepteur.",
					type: "article",
				},
				{
					duration: 17,
					name: "Occaecat commodo veniam esse consectetur fugiat proident tempor aliquip do dolor commodo.",
					type: "article",
				},
				{
					duration: 4,
					name: "In dolor consectetur ad reprehenderit ullamco esse irure.",
					type: "video",
				},
				{
					duration: 7,
					name: "Eiusmod nisi elit magna duis duis fugiat adipisicing ex exercitation.",
					type: "video",
				},
				{
					duration: 1,
					name: "Aliquip nisi excepteur et ipsum officia in laborum tempor nostrud officia laborum.",
					type: "article",
				},
			],
			name: "Pariatur mollit Lorem laborum cupidatat.",
		},
		{
			data: [
				{
					duration: 12,
					name: "Consequat dolor mollit nulla do laboris in excepteur id est ea ullamco.",
					type: "article",
				},
				{
					duration: 4,
					name: "Irure cillum consequat tempor aliqua ea pariatur aliqua adipisicing ea proident exercitation aliquip cupidatat.",
					type: "article",
				},
				{
					duration: 8,
					name: "Reprehenderit laboris elit irure adipisicing eiusmod dolor aute sunt do adipisicing.",
					type: "video",
				},
				{
					duration: 6,
					name: "Velit velit enim sint consequat amet fugiat aliquip.",
					type: "video",
				},
				{
					duration: 5,
					name: "Est laboris enim culpa ex mollit est voluptate cillum aliquip.",
					type: "video",
				},
			],
			name: "Nostrud fugiat ipsum sit sit voluptate mollit fugiat amet.",
		},
		{
			data: [
				{
					duration: 5,
					name: "Esse amet aute sint excepteur tempor non laborum mollit.",
					type: "article",
				},
				{
					duration: 5,
					name: "Sint nulla tempor dolore enim ex quis ad aliqua sunt sit nostrud.",
					type: "video",
				},
				{
					duration: 3,
					name: "Eiusmod excepteur eiusmod est fugiat est.",
					type: "article",
				},
				{
					duration: 18,
					name: "Duis officia tempor dolore excepteur.",
					type: "article",
				},
				{
					duration: 16,
					name: "Amet aliqua ipsum et occaecat aliquip enim anim.",
					type: "article",
				},
				{
					duration: 6,
					name: "Veniam enim nisi do quis cupidatat irure.",
					type: "article",
				},
				{
					duration: 19,
					name: "Lorem aute officia reprehenderit quis minim fugiat nisi voluptate veniam irure.",
					type: "article",
				},
				{
					duration: 1,
					name: "Cillum dolore laborum consequat cillum sit incididunt ea velit.",
					type: "article",
				},
				{
					duration: 0,
					name: "Amet amet id ea mollit sunt sit elit amet sunt pariatur.",
					type: "video",
				},
			],
			name: "Fugiat magna et ex ad ea exercitation exercitation commodo do elit et magna non.",
		},
		{
			data: [
				{
					duration: 0,
					name: "Ut magna aliqua aliqua non laboris nulla anim reprehenderit Lorem deserunt reprehenderit deserunt consectetur.",
					type: "article",
				},
				{
					duration: 14,
					name: "Commodo magna non elit exercitation dolor dolor ut nisi non officia eiusmod laboris.",
					type: "article",
				},
				{
					duration: 15,
					name: "Quis ex dolor minim laborum nisi aliqua aute sint.",
					type: "article",
				},
				{
					duration: 2,
					name: "Commodo anim nisi consectetur ea sunt elit eiusmod esse sunt.",
					type: "video",
				},
				{
					duration: 14,
					name: "Tempor consequat nostrud magna nostrud.",
					type: "article",
				},
				{
					duration: 16,
					name: "Minim amet aliqua nostrud magna aliqua Lorem mollit ea proident nostrud.",
					type: "video",
				},
				{
					duration: 17,
					name: "Elit anim excepteur magna deserunt ad laborum elit amet duis incididunt voluptate occaecat nisi.",
					type: "article",
				},
				{
					duration: 15,
					name: "Cillum pariatur id duis officia commodo elit anim aute nulla non officia aliqua.",
					type: "video",
				},
				{
					duration: 7,
					name: "Irure amet reprehenderit eiusmod pariatur voluptate ea ad fugiat laborum est do eu.",
					type: "article",
				},
			],
			name: "Labore dolor qui pariatur laborum nisi ipsum exercitation aliqua consectetur deserunt id tempor.",
		},
		{
			data: [
				{
					duration: 19,
					name: "Veniam velit est laboris eiusmod cupidatat.",
					type: "video",
				},
				{
					duration: 17,
					name: "Tempor commodo enim minim enim elit deserunt minim eiusmod eu ad labore ipsum.",
					type: "video",
				},
				{
					duration: 7,
					name: "Sunt magna consectetur adipisicing aute ad et magna amet sunt aute ullamco proident.",
					type: "article",
				},
				{
					duration: 12,
					name: "Ea exercitation Lorem excepteur magna qui consectetur aliqua veniam eu officia id commodo.",
					type: "article",
				},
			],
			name: "Eu ea eiusmod consectetur non deserunt enim aute voluptate aute sit non ut ad voluptate.",
		},
	],
	subtitle:
		"Culpa fugiat anim est sit labore qui sunt tempor veniam sint deserunt reprehenderit. Velit consequat nostrud exercitation tempor anim sint laboris proident.",
	title: "Proident ullamco nulla anim ut tempor officia.",
}

export const Homepage = () => {
	const [user, setUser] = useState<User>()
	const year = new Date().getFullYear()
	const containerRef = useRef<HTMLDivElement>(null)
	const handleRightClick = () => {
		containerRef.current!.scrollLeft += 200
		if (containerRef.current!.classList.contains("mask-0")) {
			containerRef.current!.classList.remove("mask-0")
			containerRef.current?.classList.add("mask")
		}
		if (
			containerRef.current!.scrollLeft >=
			containerRef.current!.scrollWidth - 1200
		) {
			containerRef.current!.classList.remove("mask")
			containerRef.current?.classList.add("mask-100")
		}
	}
	const handleLeftClick = () => {
		containerRef.current!.scrollLeft -= 200
		if (containerRef.current!.classList.contains("mask-100")) {
			containerRef.current!.classList.remove("mask-100")
			containerRef.current?.classList.add("mask")
		}
		if (containerRef.current!.scrollLeft <= 200) {
			containerRef.current!.classList.remove("mask")
			containerRef.current?.classList.add("mask-0")
		}
	}
	const categories = [
		"Development",
		"Finance & Accounting",
		"IT & Software",
		"Office Productivity",
		"Personal Development",
		"Development",
		"Finance & Accounting",
		"Personal Development",
		"Office Productivity",
		"Office Productivity",
		"Office Productivity",
		"IT & Software",
	]
	return (
		<>
			<header className="background">
				<Navbar
					home
					user={user}
					onLogin={() => setUser({ name: "John Smitt" })}
					onLogout={() => setUser(undefined)}
				/>
				<section className="px-25 py-18 relative">
					<img
						src={left_circle}
						alt="circle"
						className="absolute left-0 top-24"
					/>
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
							LearningPlatform is an online learning site that provides tens{" "}
							<br />
							of thousands of classes with experienced instructions.
						</p>
						<div className="flex gap-9  mb-18">
							<div className="flex items-center gap-5">
								<span className="hero__icon">
									<TbBriefcase size={24} />
								</span>
								<span className="text-white text-body2-bold ">
									Career-Oriented
								</span>
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
							<img
								src={hero}
								alt="young student"
								className="absolute bottom-0 "
							/>
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
								<img src={blue_circle} alt="" />
								<span className="text-center">
									<h4 className="text-h4 text-white ">5K+</h4>
									<p className="text-body3 text-grey">Online Courses</p>
								</span>
							</div>
						</div>
					</div>
				</section>
			</header>
			<section className="bg-blue bg-opacity-5 relative flex justify-between p-25 gap-40 md:flex-col md:gap-20">
				<img src={circle} alt="circle" className="absolute top-0 right-0" />
				<h2 className="text-h2">
					Online <br /> Learning <span className="text-blue">Designed</span> For
					Real Life
				</h2>
				<div className="">
					<span className="semihero__icon">
						<TbUserCheck size={24} />
					</span>
					<h4 className="text-h4 mb-3">
						User-friendly platform <br /> to learn{" "}
					</h4>
					<p className="text-grey text-body2">
						Learning theory, computer-based training, online learning,
						m-learning, where mobile technology is used
					</p>
				</div>
				<div>
					<span className="semihero__icon">
						<TbDevices size={24} />
					</span>
					<h4 className="text-h4 mb-3">Packed with modern technology </h4>
					<p className="text-grey text-body2">
						Packed with modern technology, classroom learning which used to be
						done conventionally
					</p>
				</div>
			</section>
			<Testimonials />
			<section className="background p-25" id="categories">
				<header>
					<p className="label mb-4">Categories</p>
					<h3 className="text-h3 text-white	mb-20">
						Train your team with real world
						<br />
						skills and knowledge
					</h3>
				</header>
				<div className="mb-14">
					<div className="relative">
						<TbChevronLeft
							onClick={handleLeftClick}
							className="arrows--grey absolute left-0 top-1/2 -translate-y-1/2 select-none"
						/>

						<div
							ref={containerRef}
							className="flex items-center gap-2 overflow-x-hidden mx-20  scroll-smooth mask-0"
						>
							{categories.map((item, index) => (
								<span
									key={index}
									className="hover:bg-white hover:text-black ease-in-out duration-200 select-none cursor-pointer inline-block py-4 px-6 whitespace-nowrap text-body3 text-white rounded border border-white border-opacity-10 text-center"
								>
									{item}
								</span>
							))}
						</div>
						<TbChevronRight
							onClick={handleRightClick}
							className="arrows--grey absolute right-0 top-1/2 -translate-y-1/2 select-none"
						/>
					</div>{" "}
				</div>
				<div className="flex justify-between flex-wrap mb-12 md:gap-10 md:justify-center">
					<VideoCard item={mockData} home />
					<VideoCard item={mockData} home />
					<VideoCard item={mockData} home />
					<VideoCard item={mockData} home />
				</div>
				<div className="flex gap-2 md:justify-center">
					<Button medium secLight>
						Get Started
					</Button>
					<Button medium className="text-yellow-light">
						Learn More
					</Button>
				</div>
			</section>
			<section className="p-25 bg-black bg-opacity-5">
				<div className="flex gap-20 md:flex-col">
					<div>
						<p className="label mb-4">Our adventage features</p>
						<h3 className="text-h3 	mb-6">Why must choose learningPlatform</h3>
						<p className="text-body2 text-grey pb-9 border-b-2 border-black border-opacity-10">
							LearningPlatform is biggest platform to learnin ganything to
							improve your skill with 350+ online video course
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
			<Testimonials testimonials />
			<section className="px-25 pb-14 background-half">
				<div className="bg-yellow-light rounded w-full flex items-center justify-between p-18">
					<div>
						<h3 className="text-h3 mb-4">
							Join now for <br />
							get special features!
						</h3>
						<p className="text-body2">
							Let's subscribe with us and find the fun.
						</p>
					</div>
					<Button className="text-yellow-light bg-black py-4 px-20  text-body1-bold">
						Get started
					</Button>
				</div>
			</section>
			<footer className="px-25 pt-14 pb-8 background">
				<div className=" flex justify-between items-center mb-25">
					<div className="select-none flex gap-4 items-center">
						<img src={logo} alt="logo" />
						<p className="text-white text-body2-extrabold">learningPlatform</p>
					</div>
					<div>
						<ul className="flex gap-8">
							<li className="footer__item">Browse</li>
							<li className="footer__item">Categories</li>
							<li className="footer__item">FAQ</li>
						</ul>
					</div>
					<div className="text-grey flex gap-7">
						<TbBrandFacebook
							size={22}
							className="cursor-pointer ease-in duration-200 hover:text-yellow-light"
						/>
						<TbBrandYoutube
							size={22}
							className="cursor-pointer ease-in duration-200 hover:text-yellow-light"
						/>
						<TbBrandInstagram
							size={22}
							className="cursor-pointer ease-in duration-200 hover:text-yellow-light"
						/>
					</div>
				</div>
				<p className=" text-body3 text-grey">© learningPlatform, {year}</p>
			</footer>
		</>
	)
}
