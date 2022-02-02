import React from "react"
// import { TextField } from "@material-ui/core"
import StyledInput from '../Input/styled-nput'
import PropTypes from 'prop-types'

export default function Input({label, ...props}) {
	return (
		<StyledInput  label={label} {...props}/>
	)
}


Input.propTypes = {
  label: PropTypes.string
}