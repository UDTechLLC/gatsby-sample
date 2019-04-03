import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import { FaQuestionCircle } from 'react-icons/fa'
import _ from 'lodash'

import { Link } from './common'

// styles
const Wrapper = styled.div`
  margin: 60px auto 15px;
  position: relative;

  &::before {
    content: '';
    width: 50%;
    height: 1px;
    border-bottom: 2px solid #3c444e;
    top: -3rem;
    left: 25%;
    position: absolute;
  }
`
const NpmButton = styled.button`
  font-family: ${props => props.theme.fontMono};
  font-size: 1.2em;
  background: #000;
  border-radius: 8px;
  color: ${props => props.theme.milky};
  padding: 15px;
  text-align: left;
  border: none;
  display: inline-flex;
  align-items: center;
  outline: none;
  cursor: pointer;

  & > span:first-of-type {
    margin-right: 0.5rem;
    color: ${props => props.theme.green};
  }
  &::after {
    content: '';
    width: 0.5em;
    display: inline-block;
    background-color: ${props => props.theme.yellow};
    height: 2.1rem;
    margin-left: 0.5rem;
  }
`
const DownloadInstall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;

  span:not(:last-of-type) {
    color: ${props => props.theme.white};
  }
  a,
  span:last-of-type {
    color: ${props => props.theme.green};
  }
  a {
    text-decoration: none;
    border-bottom: 1px dashed ${props => props.theme.green};
    margin: 0 0.5rem;
  }
`
const ClipboardMsg = styled.div`
  width: 175px;
  height: 30px;
  background: ${props => props.theme.green};
  border-radius: 10px;
  margin: 10px auto 10px auto;
  color: ${props => props.theme.white};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

class InstallMethod extends Component {
  state = {
    cmd: 'npm install cypress',
    animationTime: 2000, // in ms
    showMsg: false,
  }

  setTimer = () => {
    const { animationTime } = this.state

    return setTimeout(() => {
      this.setState({ showMsg: false })
    }, animationTime)
  }

  handleNpmBtnClick = async () => {
    const { cmd, showMsg } = this.state
    // if msg shown - do nothing
    if (showMsg) return
    // or copy command to clipboard
    await navigator.clipboard.writeText(cmd)
    // then show msg and set remove timeout
    await this.setState({ showMsg: true })
    return this.setTimer()
  }

  render() {
    const { cmd, animationTime, showMsg } = this.state

    return (
      <Wrapper>
        <NpmButton
          type="button"
          onClick={_.throttle(this.handleNpmBtnClick, animationTime)}
        >
          <span>$</span>
          <span>{cmd}</span>
        </NpmButton>
        <DownloadInstall>
          <span>or</span>
          <Link inner={false} to="https://download.cypress.io/desktop">
            Download now
          </Link>
          <span>
            <FaQuestionCircle data-tip="Installing Cypress as an npm module is recommended, but downloading directly can be a great way to try it out first." />
            <ReactTooltip place="right" multiline />
          </span>
        </DownloadInstall>
        <ClipboardMsg style={{ display: !showMsg ? 'none' : 'inline-flex' }}>
          Copied to clipboard!
        </ClipboardMsg>
      </Wrapper>
    )
  }
}

export default InstallMethod
