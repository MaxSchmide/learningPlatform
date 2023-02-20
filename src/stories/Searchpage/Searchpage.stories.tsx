import { userEvent, within } from "@storybook/testing-library"
import Searchpage from "./Searchpage"
import { ComponentStory } from "@storybook/react"

export default {
	title: "Pages/Search Page",
	component: Searchpage,
}

const Template: ComponentStory<typeof Searchpage> = () => <Searchpage />
export const Default = Template.bind({})
Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const loginButton = await canvas.getByRole("button", { name: /Sign in/i })
	await userEvent.click(loginButton)
}
