import React from 'react'
import CookieConsent from 'react-cookie-consent'
import styled, { withTheme } from 'styled-components'

import { Link } from './common'

const PrivacyLink = styled(Link)`
  color: ${props => props.theme.gray};
  text-decoration: underline;

  &:hover {
    color: ${props => props.theme.darkGray};
  }
  &:visited {
    color: ${props => props.theme.gray};
  }
`

const GDPRPanel = withTheme(({ theme }) => (
  <CookieConsent
    location="bottom"
    buttonText="Got it!"
    // cookieName="myAwesomeCookieName2"
    style={{
      background: theme.milky,
      color: theme.darkGray,
    }}
    disableButtonStyles
    buttonClasses="btn"
    buttonStyle={{ alignSelf: 'stretch' }}
    // expires={150}
  >
    This website uses cookies to ensure you get the best experience on our
    website.{' '}
    <PrivacyLink
      inner={false}
      to="https://www.cypress.io/privacy-policy/#Use-of-Cookies-and-other-Data-Collection-Tools"
    >
      Learn More
    </PrivacyLink>
  </CookieConsent>
))

export default GDPRPanel
