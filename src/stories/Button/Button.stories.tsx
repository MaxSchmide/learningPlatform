import { ComponentStory } from "@storybook/react"
import Button from "./Button"

export default {
	title: "Components/Button",
	component: Button,
	args: {
		small: true,
		outline: false,
	},
}

const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>{args.children}</Button>
)

export const Primary = Template.bind({})
Primary.args = {
	primary: true,
	children: "Primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
	secondary: true,
	children: "Secondary",
}
export const Light = Template.bind({})
Light.args = {
	secLight: true,
	children: "Light",
}
