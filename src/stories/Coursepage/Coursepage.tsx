import { Rating } from "@mui/material"
import { useState } from "react"
import { MdOutlineStarOutline } from "react-icons/md"
import {
	TbArrowBarToDown,
	TbBrandFacebook,
	TbBrandInstagram,
	TbBrandYoutube,
	TbCheck,
	TbClock,
	TbFileCertificate,
	TbFileText,
	TbFolder,
	TbPlayerPlay,
	TbX,
} from "react-icons/tb"
import logo from "../../images/favicon.svg"
import "../../index.css"
import { toHoursAndMinutes } from "../../utils"
import Accordion from "../Accordion/Accordion"
import Button from "../Button/Button"
import Navbar from "../Navbar/Navbar"

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
const Coursepage = () => {
	const [isPreviewClicked, setIsPreviewClicked] = useState(false)
	const [user, setUser] = useState<User>()

	const year = new Date().getFullYear()
	const numOfArticles = mockData.sections
		.map((lesson) => lesson.data?.filter((i) => i.type === "article"))
		.reduce((acc, element) => acc + element!.length, 0)
	const numOfLessons = mockData.sections.reduce(
		(acc, element) => acc + element.data!.length,
		0
	)
	const courseMinutes = mockData.sections
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
			<header className="background">
				<Navbar
					user={user}
					onLogin={() => setUser({ name: "John Smitt" })}
					home
				/>
				<div className=" px-25 py-18 flex justify-between text-white">
					<div className="w-1/2">
						<h3 className="text-h3 mb-6 ">{mockData.title}</h3>
						<p className="text-body2 w-2/3">{mockData.subtitle}</p>
						<div className="py-12 flex gap-8 items-center border-b border-white border-opacity-10">
							<Button medium secLight>
								Enroll for free
							</Button>
							<div className="flex gap-2 items-center">
								<p className="text-body2-bold text-yellow-light">
									{mockData.rating}
								</p>
								<Rating
									name="half-rating-read"
									defaultValue={mockData.rating}
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
							<p className="text-body2">{mockData.author}</p>
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
							className={`w-[27.5rem] h-[18rem]  relative duration-300 ease-in-out  ${
								isPreviewClicked && "scale-200"
							} `}
						>
							<img
								src={mockData.previewURL}
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
			</header>
			<section className="relative mx-25 py-18 border-b border-black border-opacity-10 ">
				<div className="w-1/2">
					<h4 className="text-h4 mb-3">Course content</h4>
					<div className="flex gap-4 text-grey text-body3">
						<div className="flex gap-2 items-center">
							<TbFolder />
							<p>{mockData.sections.length} sections</p>
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
					<Accordion items={mockData.sections} />
				</div>
				<div className="w-[27.5rem] absolute right-0 top-10 rounded-xl bg-grey-light p-8">
					<h4 className="text-h4 mb-8">What you`ll learn</h4>
					{mockData.features?.map((ft, i) => (
						<div key={i} className="flex gap-3 mb-6">
							<span>
								<TbCheck className="text-grey" size={24} />
							</span>
							<p className="text-body2">{ft}</p>
						</div>
					))}
				</div>
			</section>
			<section className="pl-25 pt-12 pb-18 w-1/2">
				<h4 className="text-h4 mb-8">Description</h4>
				{mockData.description}
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

export default Coursepage
