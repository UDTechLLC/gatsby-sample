import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { withTheme } from 'styled-components'

import { Link } from './common'

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
    buttonClasses={['btn']}
    buttonStyle={{ alignSelf: 'stretch' }}
    // expires={150}
  >
    This website uses cookies to ensure you get the best experience on our
    website.{' '}
    <Link
      style={{
        color: theme.gray,
        textDecoration: 'underline',
      }}
      visitedStyle={{ color: theme.gray }}
      hoverStyle={{ color: theme.gray }}
      inner={false}
      to="https://www.cypress.io/privacy-policy/#Use-of-Cookies-and-other-Data-Collection-Tools"
    >
      Learn More
    </Link>
  </CookieConsent>
))

export default GDPRPanel
