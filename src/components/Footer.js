import React from 'react'
import styled, { withTheme } from 'styled-components'

import { Link } from './common'

// styles
const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.deepBlue};
  color: ${props => props.theme.gray};
`
const TopWrapper = styled.div`
  display: flex;
`
const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`
const TopHeading = styled.h5`
  font-size: 1.5rem;
  line-height: 1.7rem;
  color: ${props => props.theme.white};
  font-weight: 700;
`
// nav list items
const getStarted = [
  {
    inner: false,
    to: 'https://on.cypress.io/why-cypress',
    label: 'Why Cypress',
  },
  {
    inner: false,
    to: 'https://on.cypress.io/installing-cypress',
    label: 'Install Cypress',
  },
  {
    inner: false,
    to: 'https://on.cypress.io/writing-your-first-test',
    label: 'Write your first test',
  },
  {
    inner: false,
    to: 'https://on.cypress.io/testing-your-app',
    label: 'Test your app',
  },
]
const Footer = withTheme(({ theme }) => {
  const renderNavColumn = (heading, links) => (
    <div>
      <TopHeading>{heading}</TopHeading>
      <ul>
        {links.map(({ inner, label, to }) => (
          <li>
            <Link inner={inner} to={to}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <FooterWrapper>
      <TopWrapper>
        {renderNavColumn('Get Started', getStarted)}
        {renderNavColumn('Support', getStarted)}
        {renderNavColumn('Developers', getStarted)}
        {renderNavColumn('Company', getStarted)}
      </TopWrapper>
      <BottomWrapper>
        © {new Date().getFullYear()} Cypress.io •
        <Link
          to="/privacy-policy"
          style={{
            color: theme.gray,
            marginLeft: '5px',
          }}
          visitedStyle={{ color: theme.gray }}
          hoverStyle={{ color: `${theme.milky} !important` }}
        >
          Privacy
        </Link>
      </BottomWrapper>
    </FooterWrapper>
  )
})

export default Footer
