import React from "react"
import Typography from "../components/Typography"

export default {
	title: "Typography",
	component: Typography,
}

const Template = (args) => <Typography {...args} />

export const DisplayLarg = Template.bind({})
DisplayLarg.args = {
	variant: "display-l",
	text: "Display Larg",
}

// Display
export const DisplayMedium = Template.bind({})
DisplayMedium.args = {
	variant: "display-m",
	text: "Display Medium",
}

export const DisplaySmall = Template.bind({})
DisplaySmall.args = {
	variant: "display-s",
	text: "Display Small",
}

export const HeadlineLarg = Template.bind({})
HeadlineLarg.args = {
	variant: "headline-l",
	text: "Headline Larg",
}

// Headline
export const HeadlineMedium = Template.bind({})
HeadlineMedium.args = {
	variant: "headline-m",
	text: "Headline Medium",
}

export const HeadlineSmall = Template.bind({})
HeadlineSmall.args = {
	variant: "headline-s",
	text: "Headline Small",
}

// Title
export const TitleLarg = Template.bind({})
TitleLarg.args = {
	variant: "title-l",
	text: "Title Larg",
}

export const TitleMedium = Template.bind({})
TitleMedium.args = {
	variant: "title-m",
	text: "Title Medium",
}

export const TitleSmall = Template.bind({})
TitleSmall.args = {
	variant: "title-s",
	text: "Title Small",
}

// Label
export const LabelLarg = Template.bind({})
LabelLarg.args = {
	variant: "label-l",
	text: "Label Larg",
}

export const LabelMedium = Template.bind({})
LabelMedium.args = {
	variant: "label-m",
	text: "Label Medium",
}
export const LabelSmall = Template.bind({})
LabelSmall.args = {
	variant: "label-s",
	text: "Label Small",
}

// Body
export const BodyLarg = Template.bind({})
BodyLarg.args = {
	variant: "body-l",
	text: "Body Larg",
}

export const BodyMedium = Template.bind({})
BodyMedium.args = {
	variant: "body-m",
	text: "Body Medium",
}

export const BodySmall = Template.bind({})
BodySmall.args = {
	variant: "body-s",
	text: "Body Small",
}
