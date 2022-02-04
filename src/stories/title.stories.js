import React from "react"
import Title from "../components/Title/title"

export default {
	title: "Title",
	component: Title,
}

const Template = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
	text: "Title Larg",
}
