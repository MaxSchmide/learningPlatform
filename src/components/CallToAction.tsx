import Button from "./Button"

const CallToAction = () => {
	return (
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
	)
}

export default CallToAction
