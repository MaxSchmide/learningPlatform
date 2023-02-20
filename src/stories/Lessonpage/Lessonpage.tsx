import { useState } from "react"
import {
	TbBrandFacebook,
	TbBrandInstagram,
	TbBrandYoutube,
	TbClock,
	TbFileZip,
	TbPlayerPlay,
	TbX,
} from "react-icons/tb"
import logo from "../../images/favicon.svg"
import "../../index.css"
import Accordion from "../Accordion/Accordion"
import Button from "../Button/Button"
import Navbar from "../Navbar/Navbar"

type User = {
	name: string
}

interface Props {
	isArticle?: boolean
	indexOfSection: number
	indexOfLesson: number
	onNextLessonClick?: () => void
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

const Lessonpage = ({
	isArticle,
	onNextLessonClick,
	indexOfSection,
	indexOfLesson,
}: Props) => {
	const [user, setUser] = useState<User>()
	const [isPreviewClicked, setIsPreviewClicked] = useState(false)
	const year = new Date().getFullYear()
	const selectedSection = mockData.sections.find(
		(section, sectionIndex) => sectionIndex === indexOfSection
	)
	const selectedLesson = selectedSection?.data.find(
		(lesson, lessonIndex) => lessonIndex === indexOfLesson
	)
	const nextLesson = selectedSection?.data?.find(
		(lesson, lessonIndex) => indexOfLesson + 1 === lessonIndex
	)
	const lessonIndex = indexOfLesson + 2

	const handleClick = () => {
		setIsPreviewClicked(!isPreviewClicked)
	}
	return (
		<>
			<header className="background">
				<Navbar
					home
					user={user}
					onLogin={() => setUser({ name: "John Smitt" })}
				/>
				<div className="px-25 py-18 relative ">
					<div className={` ${isArticle ? "w-full" : "w-[35%] md:w-4/5"}`}>
						<div className="flex justify-between items-start">
							<h3 className="text-h3 mb-12 text-white">{mockData.title}</h3>
							{isArticle && (
								<Button
									outline
									secLight
									medium
									className="whitespace-nowrap ml-10 hover:bg-yellow-light hover:text-dark"
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
									{mockData.description?.slice(0, 200)}
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
										onClick={onNextLessonClick}
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
									<Button outline secLight medium>
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
				</div>
			</header>
			<section
				className={`px-25 ${
					isArticle ? "py-18" : "pb-18 "
				} flex justify-between`}
			>
				<div className={`${isArticle ? "w-[55%]" : "pt-12 w-[35%] md:w-2/5"}`}>
					{isArticle ? (
						<>
							<h4 className="text-h4 mb-8">Data Validation</h4>
							<p className="text-body2 mb-8">
								In addition to the existence of a field, there are other ways
								the data being accessed may differ from expectation. For
								examples, a data field may have a type or a format that is
								different from expectation. In this section we will look at an
								example of validating the data being accessed using Rego. First,
								here is an example of the expected input to add items to a
								catalog at some path.
							</p>
							<pre className="bg-[#2a3741] text-white px-4 mb-8 ">
								{`example_input += { 
	"user": {
		"access_level":2
	},
	"path": "/catalog",
	"payload":{
		"items":[
			{
				"id": "a-phone",
				"type": "phone",
				"price": 1000
			},
			{
				"id": "b-phone",
				"type": "phone",
				"price": 500
			},
			{
				"id": "a-tab",
				"type": "tablet",
				"price": 2000
			}
		]
	}
}`}
							</pre>
							<p className="text-body2 mb-8">
								Then, the policy author can author policy rules assuming the
								input has been validated. The rules set policy_allow to true to
								indicate allowing a request.
							</p>
							<pre className="bg-[#2a3741] text-white px-4 mb-8">
								{`policy_allow if {
		input.user.access_level >= 1
		every item in input.playload.items {
			item.price <= 1000
		}
	}
	policy_allow if {
		input.user.access_level >=2
		every item in input.payload.items {
			item.price <= 2000
		}
	}
`}
							</pre>
						</>
					) : (
						<Accordion items={mockData.sections} />
					)}
				</div>
				<div className={`${isArticle ? "w-[35%] " : "pt-36 w-[55%] md:w-2/5"}`}>
					{isArticle ? (
						<>
							<div className="">
								<h4 className="text-h4 mb-8">Lesson attachment</h4>
								<div className=" mb-8">
									<div className="flex gap-4 mb-6">
										<span className="inline-block rounded-full p-3 bg-yellow-light text-dark">
											<TbFileZip size={24} />
										</span>
										<div>
											<p className="text-body2">Fylo.zip</p>
											<p className="text-grey">12 mb</p>
										</div>
									</div>
									<div className="flex gap-4 mb-6">
										<span className="inline-block rounded-full p-3 bg-yellow-light text-dark">
											<TbFileZip size={24} />
										</span>
										<div>
											<p className="text-body2">Another-Fylo.zip</p>
											<p className="text-grey">11.9 mb</p>
										</div>
									</div>
								</div>
								<p className="text-blue text-body3-bold select-none cursor-pointer">
									Download all
								</p>
							</div>
						</>
					) : (
						<div>
							<div className="flex gap-6 items-center mb-8">
								<h4 className="text-h4">Lesson attachment</h4>
								<p className="text-blue text-body3-bold select-none cursor-pointer">
									Download all
								</p>
							</div>
							<div className="flex gap-12 mb-12">
								<div className="flex gap-4">
									<span className="inline-block rounded-full p-3 bg-yellow-light text-dark">
										<TbFileZip size={24} />
									</span>
									<div>
										<p className="text-body2">Fylo.zip</p>
										<p className="text-grey">12 mb</p>
									</div>
								</div>
								<div className="flex gap-4">
									<span className="inline-block rounded-full p-3 bg-yellow-light text-dark">
										<TbFileZip size={24} />
									</span>
									<div>
										<p className="text-body2">Another-Fylo.zip</p>
										<p className="text-grey">11.9 mb</p>
									</div>
								</div>
							</div>
							<h4 className="text-h4 mb-8">Transcription</h4>
							<p className="text-body2 pb-8 mb-8  border-b border-black border-opacity-10">
								Now we're going to add the JavaScript to be able to make the
								toggle button, show the correct SVG and to actually toggle it,
								save it to local storage. And the JavaScript that we're going to
								use is actually from a free code camp article. And this article
								is on building a dark mode switcher with Tailwind and Flow Bay,
								which I believe is a tailwind plug in for higher level
								components. We're not using flow byte. So I mean, we're not
								we're not using this whole article, but there is just some
								JavaScript that we're going to use.
							</p>
							<h5 className="text-h5 mb-6">Subtitle</h5>
							<p className="text-body2">
								And I know that this is beyond the scope of this course and what
								you might have planned, but I find that most people like this
								kind of stuff when I do it in these types of courses. But if you
								don't, then of course you can just copy it either from the main
								repository or directly from this article. So there's basically
								two parts that we need this this right here, and it's best to
								inline this in the head to avoid any flashing of Unstyled
								content. And basically what this is doing is just checking our
								local storage for a key of color theme, seeing if that if we
								have it in our local storage and seeing if it's equal to dark.
								Or it's also checking to see if our operating system is set to
								dark mode. That's what this is doing right here. This match
								media and then prefers color scheme dark. If those are true or
								one of those is true, it's going to add the class of dark to the
								HTML tag. That's what this document element is. And then it's
								saying class list, which is an object and has a method of add
								which will add a class else. If we're not if we don't have that
								dark saved, our operating system is not in dark mode, then it's
								going to make sure it removes the dark class. All right. So
								that's basically what this does. So I'm just going to copy this.
								But there's some other JavaScript to be able to do the toggle
								and all that down here that I'm going to type out and explain.
								And again, if you want to just copy and paste it, that's that's
								absolutely fine. So we're going to put this in the head like it
								was recommended. So I'm just going to go up here and paste that
								in. We can get rid of the comment here. But you know, what I am
								going to do is just paste the link to this article. I want to
								make sure I give them proper credit for this. So I'll just I'll
								just put that in a comment right here and we'll save that. Now,
								I'm going to remove this right now.
							</p>
						</div>
					)}
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

export default Lessonpage
