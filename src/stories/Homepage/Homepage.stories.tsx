import { ComponentStory } from "@storybook/react"
import { Homepage } from "./Homepage"
import { userEvent, within } from "@storybook/testing-library"

export default {
	title: "Pages/Home Page",
	component: Homepage,
}
const Template: ComponentStory<typeof Homepage> = () => <Homepage />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})

LoggedIn.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const loginButton = await canvas.getByRole("button", { name: /Sign in/i })
	await userEvent.click(loginButton)
}
