import React from "react"
import { TbChevronLeft, TbChevronRight } from "react-icons/tb"

const CategoriesBar = () => {
	const containerRef = React.useRef<HTMLDivElement>(null)
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
		</div>
	)
}

export default CategoriesBar
