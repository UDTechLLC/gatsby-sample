import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { v4 } from 'uuid'
import { FaGithub } from 'react-icons/fa'

import { Button } from './common'
import TopBanners from './TopBanners'

// nav items
import { LeftNav, RightNav } from '../data/HeaderNavs'
// styles
import {
  HeaderWrapper,
  HeaderContent,
  LogoWrapper,
  MenuWrapper,
  AltMenu,
  NavList,
  NavItem,
  NavLink,
} from './styles/header'

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
          <NavLink inner={false} to="https://dashboard.cypress.io">
            <Button>Login</Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink inner={false} to="https://github.com/cypress-io/cypress">
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
          <TopBanners />
          <HeaderContent>
            {renderLogo(images) /* logo */}
            <MenuWrapper>
              {renderNav(LeftNav) /* left navigation menu */}
              {renderNav(RightNav) /* right navigation menu */}
            </MenuWrapper>
            {renderAltNavList() /* right navigation menu with alternative view */}
          </HeaderContent>
        </HeaderWrapper>
      )}
    />
  )
}

export default Header
