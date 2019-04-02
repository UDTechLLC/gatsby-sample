import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import _ from 'lodash'
import styled from 'styled-components'

const AltLink = props => {
  const { inner, style, children, to, href, target } = props

  return inner ? (
    <Link
      {..._.omit(props, ['inner', 'style', 'visitedStyle', 'hoverStyle', 'href', 'target'])}
      style={style}
    >
      {children}
    </Link>
  ) : (
    <a
      {..._.omit(props, ['inner', 'style', 'visitedStyle', 'hoverStyle', 'href'])}
      href={to || href}
      target={target || '_blank'}
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
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
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
    color: ${props => props.visitedStyle && props.visitedStyle.color};
  }

  &:hover {
    color: ${props => props.hoverStyle && props.hoverStyle.color};
  }
`

export { StyledLink as Link }
