import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import { themes, GlobalStyle } from './styles'
import Header from './Header'

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

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 30px;
`

export default class Layout extends Component {
  state = {
    theme: themes && themes.light, // default theme is light
  }

  handleChangeTheme = () => {
    const { theme } = this.state

    // by default handleChangeTheme is handle toggling between light and dark themes
    if (theme && theme.name === 'light') {
      return this.setState({ theme: themes.dark })
    }

    return this.setState({ theme: themes.light })
  }

  render() {
    const { children } = this.props
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
                <GlobalStyle theme={theme} />

                <Header
                  siteTitle={data.site.siteMetadata.title}
                  onThemeChange={this.handleChangeTheme}
                />

                <MainContainer>
                  <main>{children}</main>

                  <Footer
                    style={{
                      backgroundColor: theme.altBg,
                      color: theme.ltText,
                    }}
                  >
                    © {new Date().getFullYear()} Cypress.io
                  </Footer>
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
}
