// import { Link } from "gatsby"
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CypressLogo from '../images/cypress-logo.svg'
import { Link, Button } from './common'

const HeaderWrapper = styled.header`
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

    <Button onClick={onThemeChange}>Change theme</Button>
  </HeaderWrapper>
)

Header.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
}
export default Header
