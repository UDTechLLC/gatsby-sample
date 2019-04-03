import React, { Component } from 'react'
import PropTypes from 'prop-types'
import html2jsx from 'html-react-parser'
import styled from 'styled-components'
import moment from 'moment'

import { Link } from './common/Link'

// styles
const BannerItemWrapper = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
`
const Html = styled.div`
  display: inline-flex;
  margin-right: 5px;

  p {
    display: inline;
    color: ${props => props.theme.orange};
  }
  a {
    text-decoration: underline;
    color: ${props => props.theme.orange};

    &:hover {
      color: ${props => props.theme.red};
    }
  }
`
const CallToAction = styled(Link)`
  background-color: ${props => props.theme.orange};
  color: ${props => props.theme.white};
  text-decoration: none;
  padding-top: 1rem;
  padding-bottom: 1rem;

  &:hover {
    background-color: ${props => props.theme.red};
  }
`
class TopBannersItem extends Component {
  state = { isActual: false }

  componentDidMount() {
    const { startDate, endDate } = this.props
    // how this banner is actual for real
    const isActual = moment().isBetween(startDate, endDate)
    return this.setState({ isActual }, () => {
      // if actual - set timer to destroy it
      // for situations when endDate is near
      if (isActual) {
        const hideIn = endDate.diff(moment())
        this.timeoutID = this.timer(hideIn)
      }
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutID)
  }

  timer = timeout =>
    setTimeout(() => {
      this.setState({ isActual: false })
    }, timeout)

  render() {
    const { text, buttonLink, buttonText } = this.props
    const { isActual } = this.state
    // don't show banner if it isn't actual
    if (!isActual) return null

    return (
      <BannerItemWrapper className="container">
        <Html>{html2jsx(text)}</Html>

        <CallToAction inner={false} to={buttonLink} className="btn">
          {buttonText || 'Get Started'}
        </CallToAction>
      </BannerItemWrapper>
    )
  }
}

TopBannersItem.propTypes = {
  text: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  startDate: PropTypes.shape().isRequired,
  endDate: PropTypes.shape().isRequired,
}

export default TopBannersItem
