import { ComponentStory } from "@storybook/react"
import Lessonpage from "./Lessonpage"

export default {
	title: "Pages/Lesson Page",
	component: Lessonpage,
	args: {
		indexOfLesson: 0,
		indexOfSection: 0,
	},
}

const Template: ComponentStory<typeof Lessonpage> = (args) => (
	<Lessonpage {...args} />
)

export const Article = Template.bind({})
Article.args = {
	isArticle: true,
}
export const Video = Template.bind({})
Video.args = {
	isArticle: false,
}
