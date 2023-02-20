/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		container: false,
	},
	content: [
		"./src/pages/**/*.{ts,tsx}",
		"./src/components/**/*.{ts,tsx}",
		"./index.html",
	],
	theme: {
		screens: {
			sm: { max: "480px" },
			md: { max: "768px" },
			lg: { max: "1024px" },
		},
		extend: {
			colors: {
				red: "#C40811",
				black: "#111110",
				dark: "#2F2F2E",
				grey: "#939393",
				"grey-light": "#F2F2F4",
				blue: "#158FFF",
				"blue-light": "#D4DFFF",
				yellow: "#E3AD09",
				"yellow-light": "#F2C94C",
				green: "#3DB613",
			},
			spacing: {
				18: "4.5rem",
				25: "7rem",
			},
			scale: {
				200: "2",
				8000: "80",
			},
			fontSize: {
				h1: [
					"3rem",
					{
						lineHeight: "56px",
						fontWeight: "800",
					},
				],
				h2: [
					"2.5rem",
					{
						lineHeight: "54px",
						fontWeight: "800",
					},
				],
				h3: [
					"2rem",
					{
						lineHeight: "40px",
						fontWeight: "800",
					},
				],
				h4: [
					"1.5rem",
					{
						lineHeight: "32px",
						fontWeight: "700",
					},
				],
				h5: [
					"1.25rem",
					{
						lineHeight: "30px",
						fontWeight: "700",
					},
				],
				"body1-extrabold": [
					"1.125rem",
					{
						lineHeight: "27px",
						fontWeight: "800",
					},
				],
				"body1-bold": [
					"1.125rem",
					{
						lineHeight: "27px",
						fontWeight: "700",
					},
				],
				body1: [
					"1.125rem",
					{
						lineHeight: "27px",
						fontWeight: "400",
					},
				],
				"body2-extrabold": [
					"1rem",
					{
						lineHeight: "24px",
						fontWeight: "800",
					},
				],
				"body2-bold": [
					"1rem",
					{
						lineHeight: "24px",
						fontWeight: "700",
					},
				],
				body2: [
					"1rem",
					{
						lineHeight: "24px",
						fontWeight: "400",
					},
				],
				"body3-bold": [
					"0.875rem",
					{
						lineHeight: "20px",
						fontWeight: "700",
					},
				],
				body3: [
					"0.875rem",
					{
						lineHeight: "20px",
						fontWeight: "400",
					},
				],
			},
			boxShadow: {
				"3xl": "0px 66px 110px rgba(0, 0, 0, 0.05)",
				box: "0px 7px 55px rgba(3, 41, 75, 0.1);",
			},
			keyframes: {
				shimmer: {
					"100%": { transform: "translateX(100%)" },
				},
			},
			animation: {
				shimmer: "shimmer 1.5s infinite",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
}
