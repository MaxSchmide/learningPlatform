import { TbFileZip } from "react-icons/tb"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { RootState } from "../store"
import Accordion from "./Accordion"
import Skeleton from "./Skeleton"

const LessonContent = () => {
	const { sections, isLoading } = useSelector(
		(state: RootState) => state.courses
	)
	const { param } = useParams()
	const matches = param?.match(/\d+/g)
	const indexOfSection = Number(matches?.[0])
	const indexOfLesson = Number(matches?.[1])
	const selectedSection = sections?.find(
		(section, sectionIndex) => sectionIndex === indexOfSection
	)
	const selectedLesson = selectedSection?.data?.find(
		(lesson, lessonIndex) => lessonIndex === indexOfLesson
	)
	const isArticle = selectedLesson?.type === "article"

	return (
		<>
			{isLoading ? (
				<Skeleton times={1} className="w-full h-screen" />
			) : (
				<section
					className={`px-25 ${
						isArticle ? "py-18" : "pb-18 "
					} flex justify-between`}
				>
					<div
						className={`${isArticle ? "w-[55%]" : "pt-12 w-[35%] md:w-2/5"}`}
					>
						{isArticle ? (
							<>
								<h4 className="text-h4 mb-8">Data Validation</h4>
								<p className="text-body2 mb-8">
									In addition to the existence of a field, there are other ways
									the data being accessed may differ from expectation. For
									examples, a data field may have a type or a format that is
									different from expectation. In this section we will look at an
									example of validating the data being accessed using Rego.
									First, here is an example of the expected input to add items
									to a catalog at some path.
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
									input has been validated. The rules set policy_allow to true
									to indicate allowing a request.
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
							<Accordion items={sections} />
						)}
					</div>
					<div
						className={`${isArticle ? "w-[35%] " : "pt-36 w-[55%] md:w-2/5"}`}
					>
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
									save it to local storage. And the JavaScript that we're going
									to use is actually from a free code camp article. And this
									article is on building a dark mode switcher with Tailwind and
									Flow Bay, which I believe is a tailwind plug in for higher
									level components. We're not using flow byte. So I mean, we're
									not we're not using this whole article, but there is just some
									JavaScript that we're going to use.
								</p>
								<h5 className="text-h5 mb-6">Subtitle</h5>
								<p className="text-body2">
									And I know that this is beyond the scope of this course and
									what you might have planned, but I find that most people like
									this kind of stuff when I do it in these types of courses. But
									if you don't, then of course you can just copy it either from
									the main repository or directly from this article. So there's
									basically two parts that we need this this right here, and
									it's best to inline this in the head to avoid any flashing of
									Unstyled content. And basically what this is doing is just
									checking our local storage for a key of color theme, seeing if
									that if we have it in our local storage and seeing if it's
									equal to dark. Or it's also checking to see if our operating
									system is set to dark mode. That's what this is doing right
									here. This match media and then prefers color scheme dark. If
									those are true or one of those is true, it's going to add the
									class of dark to the HTML tag. That's what this document
									element is. And then it's saying class list, which is an
									object and has a method of add which will add a class else. If
									we're not if we don't have that dark saved, our operating
									system is not in dark mode, then it's going to make sure it
									removes the dark class. All right. So that's basically what
									this does. So I'm just going to copy this. But there's some
									other JavaScript to be able to do the toggle and all that down
									here that I'm going to type out and explain. And again, if you
									want to just copy and paste it, that's that's absolutely fine.
									So we're going to put this in the head like it was
									recommended. So I'm just going to go up here and paste that
									in. We can get rid of the comment here. But you know, what I
									am going to do is just paste the link to this article. I want
									to make sure I give them proper credit for this. So I'll just
									I'll just put that in a comment right here and we'll save
									that. Now, I'm going to remove this right now.
								</p>
							</div>
						)}
					</div>
				</section>
			)}
		</>
	)
}

export default LessonContent
