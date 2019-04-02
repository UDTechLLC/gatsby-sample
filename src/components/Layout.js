import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import SEO from './SEO'
import { themes, GlobalStyle } from './styles'
import GDPRPanel from './GDPRPanel'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'

const MainWrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor};
`

const MainContainer = styled.div`
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 93vh;
  justify-content: space-between;
`

export default class Layout extends Component {
  state = {
    theme: themes && themes.light, // default theme is light
  }
  // TODO style themes: style variables are in ./styles/themes.js
  // handleChangeTheme = () => {
  //   const { theme } = this.state
  //
  //   // by default handleChangeTheme is handle toggling between light and dark themes
  //   if (theme && theme.name === 'light') {
  //     return this.setState({ theme: themes.dark })
  //   }
  //
  //   return this.setState({ theme: themes.light })
  // }

  render() {
    const { children, hero } = this.props
    const { theme } = this.state

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <ThemeProvider theme={theme}>
              <MainWrapper>
                {/* SEO headers */}
                <SEO />
                {/* styled-components global styles */}
                <GlobalStyle theme={theme} />
                {/* Makes site GDPR compliant */}
                <GDPRPanel />
                <Header />
                <MainContainer>
                  {/*
                    if hero prop of layout isn't empty
                    will show hero section
                  */}
                  {hero && <Hero {...hero} />}
                  {/* page content */}
                  <main>{children}</main>
                  <Footer />
                </MainContainer>
              </MainWrapper>
            </ThemeProvider>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hero: PropTypes.oneOfType([PropTypes.shape(), PropTypes.bool]),
}

Layout.defaultProps = {
  hero: null,
}
