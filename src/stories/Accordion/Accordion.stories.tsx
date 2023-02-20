import { ComponentStory } from "@storybook/react"
import Accordion from "./Accordion"

const mockData = [
	{
		data: [
			{
				duration: 1,
				name: "Fugiat excepteur adipisicing pariatur id labore sit.",
				type: "video",
			},
			{
				duration: 19,
				name: "Ex consectetur irure Lorem consectetur in ullamco occaecat occaecat voluptate ipsum sint fugiat.",
				type: "article",
			},
			{
				duration: 0,
				name: "Laboris dolore esse ex voluptate.",
				type: "video",
			},
			{
				duration: 2,
				name: "Quis laborum irure nulla eu sint in nisi exercitation dolore.",
				type: "article",
			},
			{
				duration: 12,
				name: "Eiusmod sint veniam aliquip labore sit culpa ut.",
				type: "video",
			},
			{
				duration: 2,
				name: "Anim duis voluptate voluptate cupidatat laborum.",
				type: "article",
			},
			{
				duration: 6,
				name: "Officia ad dolore eiusmod sunt aute.",
				type: "video",
			},
		],
		name: "Amet labore ex deserunt aliquip ad ex.",
	},
	{
		data: [
			{
				duration: 9,
				name: "Do occaecat incididunt voluptate nisi velit Lorem.",
				type: "video",
			},
			{
				duration: 5,
				name: "Occaecat cupidatat aliquip eiusmod amet duis velit.",
				type: "video",
			},
			{
				duration: 12,
				name: "Reprehenderit sit pariatur quis ad ad dolore velit.",
				type: "article",
			},
			{
				duration: 7,
				name: "Incididunt occaecat ex dolore qui aute.",
				type: "article",
			},
			{
				duration: 3,
				name: "Et cupidatat reprehenderit pariatur nisi eiusmod ullamco commodo ullamco sit laboris adipisicing.",
				type: "video",
			},
			{
				duration: 14,
				name: "Ullamco deserunt est cillum laborum ad fugiat veniam.",
				type: "video",
			},
			{
				duration: 7,
				name: "Voluptate laboris quis exercitation eu deserunt non consectetur in occaecat dolor.",
				type: "article",
			},
			{
				duration: 0,
				name: "Ad laborum sint esse deserunt do reprehenderit qui veniam dolor.",
				type: "article",
			},
		],
		name: "Do irure nisi in laboris consequat labore adipisicing anim nulla velit ad aliqua pariatur esse.",
	},
	{
		data: [
			{
				duration: 1,
				name: "Ut ullamco deserunt sit consequat duis mollit proident adipisicing irure aliqua culpa elit.",
				type: "video",
			},
			{
				duration: 12,
				name: "Aliquip in sit consectetur duis duis magna enim culpa qui.",
				type: "article",
			},
			{
				duration: 8,
				name: "Magna commodo qui officia reprehenderit minim amet dolor.",
				type: "article",
			},
			{
				duration: 2,
				name: "Aliqua adipisicing amet ad aliqua irure tempor velit culpa.",
				type: "video",
			},
			{
				duration: 8,
				name: "Ullamco irure pariatur duis labore anim sint cupidatat veniam minim laboris enim amet sit consequat.",
				type: "article",
			},
			{
				duration: 12,
				name: "Commodo duis amet officia non consequat labore duis officia dolor.",
				type: "video",
			},
			{
				duration: 16,
				name: "Velit cillum incididunt mollit eiusmod consequat eu in.",
				type: "article",
			},
			{
				duration: 4,
				name: "Aliquip et eu incididunt irure adipisicing duis.",
				type: "video",
			},
		],
		name: "Aliquip tempor voluptate eiusmod veniam fugiat ex officia anim dolore duis.",
	},
	{
		data: [
			{
				duration: 13,
				name: "Proident irure commodo tempor veniam commodo incididunt dolor enim aute.",
				type: "article",
			},
			{
				duration: 15,
				name: "Laboris laboris dolore aliqua amet reprehenderit eu.",
				type: "video",
			},
			{
				duration: 2,
				name: "Anim enim aute adipisicing incididunt.",
				type: "video",
			},
			{
				duration: 4,
				name: "Aliqua quis culpa dolor do laborum reprehenderit sit non et nisi dolore sit excepteur.",
				type: "article",
			},
			{
				duration: 17,
				name: "Occaecat commodo veniam esse consectetur fugiat proident tempor aliquip do dolor commodo.",
				type: "article",
			},
			{
				duration: 4,
				name: "In dolor consectetur ad reprehenderit ullamco esse irure.",
				type: "video",
			},
			{
				duration: 7,
				name: "Eiusmod nisi elit magna duis duis fugiat adipisicing ex exercitation.",
				type: "video",
			},
			{
				duration: 1,
				name: "Aliquip nisi excepteur et ipsum officia in laborum tempor nostrud officia laborum.",
				type: "article",
			},
		],
		name: "Pariatur mollit Lorem laborum cupidatat.",
	},
	{
		data: [
			{
				duration: 12,
				name: "Consequat dolor mollit nulla do laboris in excepteur id est ea ullamco.",
				type: "article",
			},
			{
				duration: 4,
				name: "Irure cillum consequat tempor aliqua ea pariatur aliqua adipisicing ea proident exercitation aliquip cupidatat.",
				type: "article",
			},
			{
				duration: 8,
				name: "Reprehenderit laboris elit irure adipisicing eiusmod dolor aute sunt do adipisicing.",
				type: "video",
			},
			{
				duration: 6,
				name: "Velit velit enim sint consequat amet fugiat aliquip.",
				type: "video",
			},
			{
				duration: 5,
				name: "Est laboris enim culpa ex mollit est voluptate cillum aliquip.",
				type: "video",
			},
		],
		name: "Nostrud fugiat ipsum sit sit voluptate mollit fugiat amet.",
	},
	{
		data: [
			{
				duration: 5,
				name: "Esse amet aute sint excepteur tempor non laborum mollit.",
				type: "article",
			},
			{
				duration: 5,
				name: "Sint nulla tempor dolore enim ex quis ad aliqua sunt sit nostrud.",
				type: "video",
			},
			{
				duration: 3,
				name: "Eiusmod excepteur eiusmod est fugiat est.",
				type: "article",
			},
			{
				duration: 18,
				name: "Duis officia tempor dolore excepteur.",
				type: "article",
			},
			{
				duration: 16,
				name: "Amet aliqua ipsum et occaecat aliquip enim anim.",
				type: "article",
			},
			{
				duration: 6,
				name: "Veniam enim nisi do quis cupidatat irure.",
				type: "article",
			},
			{
				duration: 19,
				name: "Lorem aute officia reprehenderit quis minim fugiat nisi voluptate veniam irure.",
				type: "article",
			},
			{
				duration: 1,
				name: "Cillum dolore laborum consequat cillum sit incididunt ea velit.",
				type: "article",
			},
			{
				duration: 0,
				name: "Amet amet id ea mollit sunt sit elit amet sunt pariatur.",
				type: "video",
			},
		],
		name: "Fugiat magna et ex ad ea exercitation exercitation commodo do elit et magna non.",
	},
	{
		data: [
			{
				duration: 0,
				name: "Ut magna aliqua aliqua non laboris nulla anim reprehenderit Lorem deserunt reprehenderit deserunt consectetur.",
				type: "article",
			},
			{
				duration: 14,
				name: "Commodo magna non elit exercitation dolor dolor ut nisi non officia eiusmod laboris.",
				type: "article",
			},
			{
				duration: 15,
				name: "Quis ex dolor minim laborum nisi aliqua aute sint.",
				type: "article",
			},
			{
				duration: 2,
				name: "Commodo anim nisi consectetur ea sunt elit eiusmod esse sunt.",
				type: "video",
			},
			{
				duration: 14,
				name: "Tempor consequat nostrud magna nostrud.",
				type: "article",
			},
			{
				duration: 16,
				name: "Minim amet aliqua nostrud magna aliqua Lorem mollit ea proident nostrud.",
				type: "video",
			},
			{
				duration: 17,
				name: "Elit anim excepteur magna deserunt ad laborum elit amet duis incididunt voluptate occaecat nisi.",
				type: "article",
			},
			{
				duration: 15,
				name: "Cillum pariatur id duis officia commodo elit anim aute nulla non officia aliqua.",
				type: "video",
			},
			{
				duration: 7,
				name: "Irure amet reprehenderit eiusmod pariatur voluptate ea ad fugiat laborum est do eu.",
				type: "article",
			},
		],
		name: "Labore dolor qui pariatur laborum nisi ipsum exercitation aliqua consectetur deserunt id tempor.",
	},
	{
		data: [
			{
				duration: 19,
				name: "Veniam velit est laboris eiusmod cupidatat.",
				type: "video",
			},
			{
				duration: 17,
				name: "Tempor commodo enim minim enim elit deserunt minim eiusmod eu ad labore ipsum.",
				type: "video",
			},
			{
				duration: 7,
				name: "Sunt magna consectetur adipisicing aute ad et magna amet sunt aute ullamco proident.",
				type: "article",
			},
			{
				duration: 12,
				name: "Ea exercitation Lorem excepteur magna qui consectetur aliqua veniam eu officia id commodo.",
				type: "article",
			},
		],
		name: "Eu ea eiusmod consectetur non deserunt enim aute voluptate aute sit non ut ad voluptate.",
	},
]

export default {
	title: "Components/Accordion",
	component: Accordion,
}

const Template: ComponentStory<typeof Accordion> = (args) => (
	<Accordion {...args} />
)

export const Default = Template.bind({})
Default.args = {
	items: mockData,
}
