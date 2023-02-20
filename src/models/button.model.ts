import { HTMLAttributes } from "react"

export interface Button extends HTMLAttributes<HTMLButtonElement> {
	outline?: boolean
	children?: React.ReactNode
	[rest: string]: any
}
export type Variants =
	| { primary?: boolean; secondary?: never; secLight?: never }
	| { primary?: never; secondary?: boolean; secLight?: never }
	| { primary?: never; secondary?: never; secLight?: boolean }

export type Sizes =
	| { small?: boolean; medium?: never; large?: never }
	| { small?: never; medium?: boolean; large?: never }
	| { small?: never; medium?: never; large?: boolean }

export type ButtonProps = Button & Variants & Sizes
