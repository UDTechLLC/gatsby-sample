import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { v4 } from 'uuid'
import { FaGithub } from 'react-icons/fa'

import { Link, Button } from './common'

// styles
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
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 0 0 40px;
`
const AltMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  flex-direction: row;
`
const NavItem = styled.li`
  margin-left: 0;
  padding: 0 20px;
  display: inline-flex;
  align-items: center;
`
const NavLink = styled(Link)`
  color: ${props => props.theme.gray};
  text-decoration: none;
  transition: 0.2s;
  display: inline-block;
  font-weight: 700;
  position: relative;

  &:hover {
    color: ${props => props.theme.darkGray};
  }
`
// nav list items
const LeftNav = [
  {
    inner: true,
    to: '/features',
    label: 'Features',
  },
  {
    inner: true,
    to: '/how-it-works',
    label: 'How it works',
  },
  {
    inner: true,
    to: '/dashboard',
    label: 'Dashboard',
  },
  {
    inner: true,
    to: '/pricing',
    label: 'Pricing',
  },
]
const RightNav = [
  {
    inner: true,
    to: '/support',
    label: 'Support',
  },
  {
    inner: false,
    to: 'https://cypress.io/blog',
    label: 'Blog',
  },
  {
    inner: true,
    to: 'https://docs.sypress.io',
    label: 'Docs',
  },
]

const Header = () => {
  const renderLogo = images => (
    <LogoWrapper to="/">
      <Img
        fixed={images.logo.childImageSharp.fixed}
        objectFit="cover"
        alt="Cypress.io logo"
      />
    </LogoWrapper>
  )

  const renderAltNavList = () => (
    <AltMenu>
      <NavList>
        <NavItem>
          <NavLink inner={false} to="https://docs.cypress.io">
            <Button>Login</Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink inner={false} to="https://docs.cypress.io">
            <FaGithub style={{ fontSize: '2.2rem', lineHeight: 1 }} />
          </NavLink>
        </NavItem>
      </NavList>
    </AltMenu>
  )

  const renderNav = src => (
    <NavList>
      {src.map(({ inner, to, label }) => (
        <NavItem key={v4()}>
          <NavLink inner={inner} to={to}>
            {label}
          </NavLink>
        </NavItem>
      ))}
    </NavList>
  )

  return (
    <StaticQuery
      query={graphql`
        query {
          logo: file(relativePath: { eq: "cypress-logo.png" }) {
            childImageSharp {
              fixed(height: 40, width: 120) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={images => (
        <HeaderWrapper>
          {renderLogo(images) /* logo */}
          <MenuWrapper>
            {renderNav(LeftNav) /* left navigation menu */}
            {renderNav(RightNav) /* right navigation menu */}
          </MenuWrapper>
          {renderAltNavList() /* right navigation menu with alternative view */}
        </HeaderWrapper>
      )}
    />
  )
}

export default Header
