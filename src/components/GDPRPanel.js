import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { withTheme } from 'styled-components'

import { Link } from './common'

const GDPRPanel = withTheme(({ theme }) => (
  <CookieConsent
    location="bottom"
    buttonText="Got it!"
    // cookieName="myAwesomeCookieName2"
    style={{ background: '#efefef', color: '#404040' }}
    buttonStyle={{
      background: '#00BF88',
      color: '#fff',
      margin: 0,
      alignSelf: 'stretch',
      fontSize: '14px',
      fontWeight: 600,
    }}
    // expires={150}
  >
    This website uses cookies to ensure you get the best experience on our
    website.{' '}
    <Link
      style={{
        color: theme.gray,
        fontSize: '14px',
        textDecoration: 'underline',
      }}
      visitedStyle={{ color: theme.gray }}
      hoverStyle={{ color: theme.gray }}
      inner={false}
      href="https://www.cypress.io/privacy-policy/#Use-of-Cookies-and-other-Data-Collection-Tools"
      target="_blank"
    >
      Learn More
    </Link>
  </CookieConsent>
))

export default GDPRPanel
