import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import _ from "lodash"
import styled from "styled-components"

const AltLink = props => (
  props.inner
    ? <Link {..._.omit(props, "inner")}>{ props.children }</Link>
    : <a {..._.omit(props, "inner")}>{ props.children }</a>
)

AltLink.propTypes = {
  inner: PropTypes.bool
}

AltLink.defaultProps = {
  inner: true
}

const StyledLink = styled(AltLink)`
  color: #337ab7;
  text-decoration: none;
  cursor: pointer;
`

export { StyledLink as Link };