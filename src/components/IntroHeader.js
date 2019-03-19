import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Container = styled(BackgroundImage)`
  position: relative;
  background-position: center -100px;
  background-repeat: no-repeat;
  background-color: #17202c;
  text-align: center;
  padding: 55px 0;
`

const TagLine = styled.h1`
  line-height: 70px;
  color: #fff;
  font-size: 4em;
  font-weight: 600;
  margin: 40px 0 15px;
  font-family: Roboto, font-sans;
`

const ByLine = styled.h2`
  font-weight: 400;
  font-size: 1.5em;
  color: #c7cad1;
  line-height: 1.7em;
  margin: 0 0 15px;
  position: relative;
  font-family: Roboto, font-sans;
`

const IntroHeader = ({ title, subtitle }) => (
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
        <Container
          Tag="section"
          fluid={imageData}
          backgroundColor="#17202c"
        >
          { title && <TagLine>{ title }</TagLine> }
          { subtitle && <ByLine>{ subtitle }</ByLine> }
        </Container>
      )
    }}
  />
);

export default IntroHeader;