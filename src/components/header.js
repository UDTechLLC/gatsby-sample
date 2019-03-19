import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import CypressLogo from "../images/cypress-logo.svg"

const HeaderWrapper = styled.header`
  font-family: Roboto,font-sans;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  padding: 20px;
`
const Logo = styled(CypressLogo)`
  max-width: 120px;
  cursor: pointer;
`

const Header = () => (
  <HeaderWrapper>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `#333`,
          textDecoration: `none`,
        }}
      >
        <Logo />
      </Link>
    </h1>
  </HeaderWrapper>
)

export default Header
