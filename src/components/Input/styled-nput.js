import styled, {css} from 'styled-components'
import { TextField } from '@material-ui/core'
import {theme} from '../../tokens-obj'

export default styled(TextField)`
  ${({}) => css`
  
  
  & .MuiInputBase-input { 
      border-radius: 8px;
      padding: 25px 16px 8px;
      border: 2px solid ${theme.MdSysColorOutline};
      color: ${theme.MdSysColorOnSurface};
      background-color: ${theme.MdSysColorSurface};
    }
    
    & .MuiFilledInput-root{
      color: red;
      border-radius: 9px;
      background-color: transparent;
    }

    & .MuiInputLabel-filled{
      padding-left: 8px;

      &.Mui-focused{
        font-weight: 600;
      }
    }

  `}
`