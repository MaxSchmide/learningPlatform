import { ComponentStory } from "@storybook/react"
import CategoriedVideos from "./CategoriedVideos"

export default {
	title: "Components/CategoriedVideos",
	component: CategoriedVideos,
	argTypes: {
		type: {
			options: ["top", "recommended", "viewing"],
			control: { type: "radio" },
		},
	},
}

const Template: ComponentStory<typeof CategoriedVideos> = (args) => (
	<CategoriedVideos {...args} />
)

export const Default = Template.bind({})
