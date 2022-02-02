import React from 'react';
import PropTyps from 'prop-types'
import {CButton} from './c_button'

export default function Button({children, variant}) {
  return <CButton variant={variant}>{children}</CButton>;
}


Button.propTypes = {
  variant: PropTyps.oneOf(['filled', 'outlined', 'tonal', 'text', 'elevated']).isRequired,
  children: PropTyps.string
}