import React from "react"

import PropTypes from "prop-types"
import CTypography from "./c_typography"

export default function Typography({ variant, text }) {
	return <CTypography variant={variant}>{text}</CTypography>
}

Typography.propTypes = {
	text: PropTypes.string,
	variant: PropTypes.oneOf([
		"display-l",
		"display-m",
		"display-s",
		"headline-l",
		"headline-m",
		"headline-s",
		"title-l",
		"title-m",
		"title-s",
		"label-l",
		"label-m",
		"label-s",
		"body-l",
		"body-m",
		"body-s",
	]),
}
