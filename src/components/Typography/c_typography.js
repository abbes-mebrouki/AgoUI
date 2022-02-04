import { Typography } from "@material-ui/core"
import styled, { css } from "styled-components"
import * as theme from "../../_vars"

export default styled(Typography)`
	${({ variant }) => css`
		${HandleVariants(variant)}
	`}
`

const HandleVariants = (variant = "label-l") => {
	// eslint-disable-next-line default-case
	switch (variant) {
		// Display
		case "display-l":
			return css`
				${theme.M3DisplayLarge};
			`
		case "display-m":
			return css`
				${theme.M3DisplayMedium};
			`
		case "display-s":
			return css`
				${theme.M3DisplaySmall};
			`

		// Headline
		case "headline-l":
			return css`
				${theme.M3HeadlineLarge};
			`
		case "headline-m":
			return css`
				${theme.M3HeadlineMedium};
			`
		case "headline-s":
			return css`
				${theme.M3HeadlineSmall};
			`

		// Title
		case "title-l":
			return css`
				${theme.M3TitleLarge};
			`
		case "title-m":
			return css`
				${theme.M3TitleMedium};
			`
		case "title-s":
			return css`
				${theme.M3TitleSmall};
			`

		//Label
		case "label-l":
			return css`
				${theme.M3LabelLarge};
			`
		case "label-m":
			return css`
				${theme.M3LabelMedium};
			`
		case "label-s":
			return css`
				${theme.M3LabelSmall};
			`

		//Body
		case "body-l":
			return css`
				${theme.M3BodyLarge};
			`
		case "body-m":
			return css`
				${theme.M3BodyMedium};
			`
		case "body-s":
			return css`
				${theme.M3BodySmall};
			`
	}
}
