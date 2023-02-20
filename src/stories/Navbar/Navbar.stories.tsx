import { ComponentStory } from "@storybook/react"
import Navbar from "./Navbar"

export default {
	title: "Components/Navbar",
	component: Navbar,

	argTypes: {
		backgroundColor: { control: "color" },
	},
}

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />
export const LoggedIn = Template.bind({})
LoggedIn.args = {
	user: {
		name: "John Smitt",
	},
}
export const LoggedOut = Template.bind({})
LoggedOut.args = {}
