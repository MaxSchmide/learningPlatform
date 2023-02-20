import { ComponentStory } from "@storybook/react"
import Coursepage from "./Coursepage"
import { userEvent, within } from "@storybook/testing-library"

export default {
	title: "Pages/Course Page",
	component: Coursepage,
}

const Template: ComponentStory<typeof Coursepage> = () => <Coursepage />
export const Default = Template.bind({})

Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const loginButton = await canvas.getByRole("button", { name: /Sign in/i })
	await userEvent.click(loginButton)
}
