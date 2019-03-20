import React from "react"
import styled, { withTheme } from "styled-components"

const RibbonWrapper = withTheme(styled.div`
  color: #fff;
  position: relative;
  padding: .3em 1em;
  line-height: 1.2em;
  display: inline-block;
  top: 10px;
  left: -10px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,.03);

  background-color: ${props => props.color || props.theme.brandSuccess};
  
  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    bottom: 100%;
    left: 0;
    border-width: .5em .7em 0 0;
    border-color: transparent #000 transparent transparent;
  }
  
  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-color: ${
      props => {
        const color = props.color || props.theme.brandSuccess
        return `${color} transparent ${color} ${color}`
      }
    };
    bottom: 0;
    top: 0;
    left: 100%;
    border-width: .85em 1em .85em .3em;
  }
`)

const Ribbon = ({ text }) => (
  <RibbonWrapper>
    { text && text.toLowerCase() }
  </RibbonWrapper>
)

export { Ribbon };