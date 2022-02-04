import styled, { css } from "styled-components"
import { Button } from "@material-ui/core"
import * as theme from "../_vars.js"

export const CButton = styled(Button)`
	${({ variant }) => css`
		${HandleVariants(variant)}
	`}
`

const HandleVariants = (variant = "filled") => {
	// eslint-disable-next-line default-case
	switch (variant) {
		case "filled":
			return css`
				background-color: ${theme.M3SysLightPrimary};
				color: ${theme.M3SysLightOnPrimary};
				

				&::after {
					content: " ";
					height: 100%;
					width: 100%;
					position: absolute;
				}
				&:hover::after {
					background-color: ${theme.M3ReadOnlyLightOnPrimaryOpacity008};
				}
				&:hover {
					background-color: ${theme.M3SysLightPrimary};
				}

				& span{
					z-index: 1;
				}



			`

		case "outlined":
			return css`
				border: 1px solid ${theme.ColorM3SysLightOutline};
				background-color: unset;
				color: ${theme.ColorM3SysLightPrimary};

				&:hover {
					background-color: #f3f1f8;
				}
			`
		case "tonal":
			return css`
				background-color: ${theme.ColorM3SysDarkOnSecondaryContainer};
				color: ${theme.ColorM3SysLightOnSecondaryContainer};

				&:hover {
					background-color: ${theme.ColorM3ReadOnlyDarkOnSecondaryContainerOpacity008};
				}
			`
		case "text":
			return css`
				background-color: unset;
				color: ${theme.MdSysColorPrimary};

				&:hover {
					background-color: #f3f1f8;
				}
			`
		case "elevated":
			return css`
				background-color: ${theme.ColorM3ReadOnlyLightSurface10};
				color: ${theme.MdSysColorPrimary};
				box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

				&:hover {
					/* box-shadow: 0 1px 2px rgba(0,0,0, .3); */
					background-color: "#E8E0EF";
				}
			`
	}
}
