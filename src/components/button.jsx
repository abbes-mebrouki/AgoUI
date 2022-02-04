import React from 'react';
import PropTypes from 'prop-types'
import {CButton} from './c_button'

import AddIcon from '@material-ui/icons/Add';

export default function Button({label, variant, startIcon}) {
  const startIco = startIcon ? startIcon : undefined
  return <CButton startIcon={startIco} variant={variant}>{label}</CButton>;
}


Button.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outlined', 'tonal', 'text', 'elevated']).isRequired,
  label: PropTypes.string,
  startIcon: PropTypes.node,
  
}