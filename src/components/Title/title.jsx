import React from 'react';
import styled from 'styled-components'
import * as theme from '../../_vars'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core';


const CTitle = styled(Typography)`
  ${theme.M3LabelLarge}
  /* line-height: ${theme.Label}; */
`

export default function Title({text}) {
  return <CTitle variant='body1'>{text}</CTitle>;
}


Title.propTypes = {
  text: PropTypes.string
}