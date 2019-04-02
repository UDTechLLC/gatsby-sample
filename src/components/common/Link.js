import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import _ from 'lodash'
import styled from 'styled-components'

const AltLink = props => {
  const { inner, children, to, href, target } = props

  return inner ? (
    <Link
      {..._.omit(props, [
        'inner',
        'visitedStyle',
        'hoverStyle',
        'href',
        'target',
      ])}
    >
      {children}
    </Link>
  ) : (
    <a
      {..._.omit(props, ['inner', 'visitedStyle', 'hoverStyle', 'href'])}
      href={to || href}
      target={target || '_blank'}
    >
      {children}
    </a>
  )
}

AltLink.propTypes = {
  inner: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
}

AltLink.defaultProps = {
  inner: true,
}

const StyledLink = styled(AltLink)`
  color: #337ab7;
  text-decoration: none;
  cursor: pointer;
`

export { StyledLink as Link }
