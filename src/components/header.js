// import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import CypressLogo from "../images/cypress-logo.svg"
import { Link, Button } from "./common"

const HeaderWrapper = styled.header`
  font-family: Roboto,font-sans;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const LogoWrapper = styled(Link)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

const Logo = styled(CypressLogo)`
  width: 120px;
`
const Header = ({ onThemeChange }) => (
  <HeaderWrapper>
    <LogoWrapper to="/">
      <Logo />
    </LogoWrapper>

    <Button onClick={onThemeChange}>
      Change theme
    </Button>
  </HeaderWrapper>
)

export default Header
