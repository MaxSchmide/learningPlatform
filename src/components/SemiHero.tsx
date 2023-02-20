import { TbDevices, TbUserCheck } from "react-icons/tb"
import circle from "../images/semihero_circle.svg"

const SemiHero = () => {
	return (
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
					Learning theory, computer-based training, online learning, m-learning,
					where mobile technology is used
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
	)
}

export default SemiHero
