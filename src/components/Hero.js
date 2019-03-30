import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Container = styled(BackgroundImage)`
  position: relative;
  background-position: center -100px;
  background-repeat: no-repeat;
  background-color: #17202c;
  text-align: center;
  padding: 55px 0;

  @media screen and (max-width: 550px) {
    padding: 30px 0;
  }
`

const TagLine = styled.h1`
  line-height: 70px;
  color: #fff;
  font-size: 4em;
  font-weight: 600;
  margin: 40px 0 15px;

  @media screen and (max-width: 550px) {
    font-size: 3em;
    line-height: 50px;
  }
`

const ByLine = styled.h2`
  font-weight: 400;
  font-size: 1.5em;
  color: #c7cad1;
  line-height: 1.7em;
  margin: 0 0 15px;
  position: relative;

  @media screen and (max-width: 550px) {
    font-size: 1.3em;
  }
`

const Hero = ({ prologue, tagLine, byLine, epilogue }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "cypress-header-bg.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid

      return (
        <Container Tag="section" fluid={imageData}>
          {prologue}
          {tagLine && <TagLine>{tagLine}</TagLine>}
          {byLine && <ByLine>{byLine}</ByLine>}
          {epilogue}
        </Container>
      )
    }}
  />
)

Hero.propTypes = {
  prologue: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  tagLine: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  byLine: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  epilogue: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export default Hero
