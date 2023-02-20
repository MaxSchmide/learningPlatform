import { ComponentStory } from "@storybook/react"
import Testimonials from "./Testimonials"

export default {
	title: "Components/Testimonials",
	component: Testimonials,
	argTypes: {
		testimonials: {
			name: "changeForm",
		},
	},
}

const Template: ComponentStory<typeof Testimonials> = (args) => (
	<Testimonials {...args} />
)

export const Categories = Template.bind({})
Categories.args = {}

export const Reviews = Template.bind({})
Reviews.args = {
	testimonials: true,
}
