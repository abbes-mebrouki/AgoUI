import React from "react"
import Button from "../components/button"

export default {
	title: "Button",
	component: Button,
	argTypes: {

		variant: {
			control: {control: 'select'}
		}
	}
}


const Template = args => <Button {...args} />

export const Filled =  Template.bind({})
Filled.args = {
	variant: "filled",
	label: "Filled",
}

export const Outlined = Template.bind({})
Outlined.args = {
	variant: "outlined",
	label: "Outlined",
}

export const Tonal =  Template.bind({})
Tonal.args = {
	variant: "tonal",
	label: "Tonal",
}

export const Text = Template.bind({})
Text.args = {
	variant: "text",
	label: "Text",
}

export const Elevated = Template.bind({})
Elevated.args = {
	variant: "elevated",
	label: "Elevated",
}
