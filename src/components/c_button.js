import styled, { css } from "styled-components"
import { Button } from "@material-ui/core"
import {theme} from '../tokens-obj'
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
				background-color: ${theme.MdSysColorPrimary};
				color: ${theme.MdSysColorOnPrimary};

				&:hover {
					background-color: #7b58b5;
				}
			`

		case "outlined":
			return css`
				border: 1px solid ${theme.MdSysColorOutline};
				background-color: unset;
				color: ${theme.MdSysColorPrimary};

				&:hover {
					background-color: #f3f1f8;
				}
			`
		case "tonal":
			return css`
				background-color: ${theme.MdSysColorOnSecondaryContainerDark};
				color: ${theme.MdSysColorOnSecondaryContainerLight};

				&:hover {
					background-color: #dacee7;
          
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
      case 'elevated': 
      return css`
        background-color: ${theme.MdSysColorSurface1};
				color: ${theme.MdSysColorPrimary};
        box-shadow: 0 1px 2px rgba(0,0,0, .3);

        &:hover{
          /* box-shadow: 0 1px 2px rgba(0,0,0, .3); */
          background-color: '#E8E0EF';
        }
      `
	}
}
