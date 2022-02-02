import React from "react"
import { CInput } from "./c_input"
import PropTypes from 'prop-types'

export default function Input({label}) {
	return (
		<CInput
			size="small"
			InputProps={{
				disableUnderline: true,
			}}
			variant='filled'
			label={label}
		/>
	)
}


Input.propTypes = {
  label: PropTypes.string
}