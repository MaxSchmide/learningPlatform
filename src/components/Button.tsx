import className from "classnames"
import { ButtonProps } from "../models/button.model"

const Button = ({
	children,
	outline,
	primary,
	secondary,
	secLight,
	small,
	medium,
	large,
	...rest
}: ButtonProps) => {
	const classes = className(
		rest.className,
		"ease-in-out duration-300 rounded text-body2-bold",
		{
			"px-4 py-1.5": small,
			"px-6 py-2.5": medium,
			"px-9 py-4": large,
			"border-blue bg-blue text-dark": primary,
			"border-yellow bg-yellow text-dark": secondary,
			"border-yellow-light bg-yellow-light text-dark": secLight,
			"bg-transparent border": outline,
			"text-blue ": outline && primary,
			"text-yellow ": outline && secondary,
			"text-yellow-light ": outline && secLight,
		}
	)

	return (
		<button {...rest} className={classes}>
			{children}
		</button>
	)
}

export default Button
