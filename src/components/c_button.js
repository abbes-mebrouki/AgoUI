import styled, { css } from "styled-components"
import { Button } from "@material-ui/core"
import * as theme from "../_vars.js"

export const CButton = styled(Button)`
	${({ variant }) => css`
		${HandleVariants(variant)}
	`}
`

const handelHoverState = (originalColor, hoverColor) => css`
	&:hover::after {
		background-color: ${hoverColor};
	}
	&:hover {
		background-color: ${originalColor };
	}
`

const HandleVariants = (variant = "filled") => {
	// eslint-disable-next-line default-case
	switch (variant) {
		case "filled":
			return css`
				background-color: ${theme.M3SysLightPrimary};
				color: ${theme.M3SysLightOnPrimary};

				// HOVER STATE
				${handelHoverState(
					theme.M3SysLightPrimary,
					theme.M3ReadOnlyLightOnPrimaryOpacity008
				)}
			`

		case "outlined":
			return css`
				border: 1px solid ${theme.ColorM3SysLightOutline};
				background-color: unset;
				color: ${theme.ColorM3SysLightPrimary};
				
				
				// HOVER STATE
				${handelHoverState(
					theme.M3SysLightSurface,
					theme.M3ReadOnlyLightPrimaryOpacity008
				)}
			`
		case "tonal":
			return css`
				background-color: ${theme.M3SysDarkOnSecondaryContainer};
				color: ${theme.M3SysLightOnSecondaryContainer};

				${handelHoverState(
					theme.M3SysDarkOnSecondaryContainer,
					theme.M3ReadOnlyLightOnSecondaryContainerOpacity008
				)}
			`
		case "text":
			return css`
				background-color: ${theme.M3SysLightSurface};
				color: ${theme.M3SysLightPrimary};

				${handelHoverState(
					theme.M3SysLightSurface,
					theme.M3ReadOnlyLightPrimaryOpacity008
				)}
			`
		case "elevated":
			return css`
				background-color: ${theme.M3ReadOnlyLightSurface11};
				color: ${theme.MdSysColorPrimary};
				box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

				${handelHoverState(
					theme.M3ReadOnlyLightSurface11,
					theme.M3ReadOnlyLightSurface21
				)}
			`
	}
}
