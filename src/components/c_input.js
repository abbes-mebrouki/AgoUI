import styled, { css } from "styled-components"
import { TextField } from "@material-ui/core"
import { theme } from "../tokens-obj"

export const CInput = styled(TextField)`
	${({}) => css`
		.MuiInputLabel-root {
			color: ${theme.MdSysColorPrimary};
		}

		.MuiFilledInput-root {
			border-radius: 8px;
		}

		.MuiInputBase-input {
			border: 2px solid ${theme.MdSysColorOutline};
			background-color: ${theme.MdSysColorSurface};
			border-radius: 8px;
			color: ${theme.MdSysColorOnSurface};
		}

		.MuiFilledInput-root.Mui-focused {
			color: ${theme.MdSysColorOnSurface};
			.MuiInputBase-input {
				border-color: ${theme.MdSysColorPrimary};
			}

			&.MuiInputLabel-root {
				color: ${theme.MdSysColorPrimary};
			}
		}

		.MuiInputBase-inputSizeSmall {
			padding: 23px 12px 6px;
		}

		.MuiInputLabel-sizeSmall {
			margin-top: 2px;
		}
	`}
`
