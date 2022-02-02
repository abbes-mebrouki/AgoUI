import React from "react"
import Button from "../components/button"

export default {
	title: "Button",
	component: Button,
}

export const Filled = () => <Button children="Filled" variant="filled"/>
export const Outlined = () => <Button children="Outlined" variant="outlined"/>
export const Tonal = () => <Button children="Tonal" variant="tonal"/>
export const Text = () => <Button children="Text" variant="text"/>
export const Elevated = () => <Button children="Elevated" variant="elevated"/>

// const Template = (args) => <Button {...args} />

// export const Filled = () => Template.bind({})
// Filled.args = {
// 	variant: "filled",
// 	children: "Filled",
// }

// export const Outlined = () => Template.bind({})
// Outlined.args = {
// 	variant: "outlined",
// 	children: "Outlined",
// }

// export const Tonal = () => Template.bind({})
// Tonal.args = {
// 	variant: "tonal",
// 	children: "Tonal",
// }

// export const Text = () => Template.bind({})
// Text.args = {
// 	variant: "text",
// 	children: "Text",
// }

// export const Elevated = () => Template.bind({})
// Elevated.args = {
// 	variant: "elevated",
// 	children: "Elevated",
// }
