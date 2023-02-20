import { TbX } from "react-icons/tb"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import Accordion from "./Accordion"

type Props = {
	isShow: boolean
	handleShow: () => void
}

const LessonModal = ({ isShow, handleShow }: Props) => {
	const { sections } = useSelector((state: RootState) => state.courses)

	return (
		<>
			<div
				onClick={handleShow}
				className={`fixed right-0 top-1/2 -translate-y-1/2 translate-x-full ease-in-out duration-200 rounded-full h-24 w-24 bg-black bg-opacity-70 z-50 ${
					isShow && "scale-8000"
				}`}
			/>
			<div
				className={`${
					isShow && "!translate-x-0"
				} scrollbar-none fixed right-0 top-0 translate-x-full ease-in-out duration-200 bg-white shadow-box z-50 w-[30%] h-screen overflow-y-scroll py-5 px-12`}
			>
				<span
					onClick={handleShow}
					className="inline-block absolute left-2 cursor-pointer top-2"
				>
					<TbX size={26} className="text-yellow-light" />
				</span>
				<h3 className="text-h3">Course content:</h3>
				<Accordion items={sections} />
			</div>
		</>
	)
}

export default LessonModal
