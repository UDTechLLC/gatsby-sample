import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import _ from 'lodash'
import styled from 'styled-components'

const AltLink = props => {
  const { inner, style, children } = props

  return inner ? (
    <Link
      {..._.omit(props, ['inner', 'style', 'visitedStyle', 'hoverStyle'])}
      style={style}
    >
      {children}
    </Link>
  ) : (
    <a
      {..._.omit(props, ['inner', 'style', 'visitedStyle', 'hoverStyle'])}
      style={style}
    >
      {children}
    </a>
  )
}

AltLink.propTypes = {
  inner: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  style: PropTypes.shape(),
}

AltLink.defaultProps = {
  inner: true,
  style: {},
}

const StyledLink = styled(AltLink)`
  color: #337ab7;
  text-decoration: none;
  cursor: pointer;

  &:visited {
    color: ${props =>
      (props.visitedStyle && props.visitedStyle.color) || 'inherit'};
  }

  &:hover {
    color: ${props =>
      (props.hoverStyle && props.hoverStyle.color) || 'inherit'};
  }
`

export { StyledLink as Link }
