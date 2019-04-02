import React from 'react'
import { v4 } from 'uuid'
import { FaGithub, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa'
// nav items
import { getStarted, support, developers, company } from '../data/FooterNavs'
// styles
import {
  FooterWrapper,
  TopWrapper,
  BottomWrapper,
  TopHeading,
  NavList,
  NavLink,
  PrivacyLink,
  HorizontalNavList,
  HorizontalNavListItem,
} from './styles/footer'
// nav list items

const socialMedia = {
  github: 'https://github.com/cypress-io/cypress',
  twitter: 'https://twitter.com/Cypress_io',
  facebook: 'https://facebook.com/cypressio',
  mail: 'mailto:hello@cypress.io',
}

const Footer = () => {
  const renderNavColumn = (heading, links) => (
    <div>
      <TopHeading>{heading}</TopHeading>
      <NavList>
        {links.map(({ inner, label, to }) => (
          <li key={v4()}>
            <NavLink inner={inner} to={to}>
              {label}
            </NavLink>
          </li>
        ))}
      </NavList>
    </div>
  )

  const renderConnectivityColumn = () => {
    const icons = {
      github: <FaGithub style={{ fontSize: '3rem' }} />,
      twitter: <FaTwitter style={{ fontSize: '3rem' }} />,
      facebook: <FaFacebook style={{ fontSize: '3rem' }} />,
      mail: <FaEnvelope style={{ fontSize: '3rem' }} />,
    }

    return (
      <div>
        <TopHeading>Send updates to my inbox</TopHeading>
        <HorizontalNavList>
          {Object.keys(socialMedia).map(key => (
            <HorizontalNavListItem key={v4()}>
              <NavLink inner={false} to={socialMedia[key]}>
                {icons[key]}
              </NavLink>
            </HorizontalNavListItem>
          ))}
        </HorizontalNavList>
      </div>
    )
  }

  return (
    <FooterWrapper>
      <div className="container">
        <TopWrapper>
          {renderNavColumn('Get Started', getStarted)}
          {renderNavColumn('Support', support)}
          {renderNavColumn('Developers', developers)}
          {renderNavColumn('Company', company)}
          {renderConnectivityColumn()}
        </TopWrapper>
        <BottomWrapper>
          © {new Date().getFullYear()} Cypress.io •
          <PrivacyLink to="/privacy-policy">Privacy</PrivacyLink>
        </BottomWrapper>
      </div>
    </FooterWrapper>
  )
}

export default Footer
