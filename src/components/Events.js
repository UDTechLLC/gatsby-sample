import React, { Component } from "react"
import PropTypes from "prop-types"
import styled, { withTheme } from "styled-components"
import moment from "moment"
import _ from "lodash"
import Select from "react-select"
import { v4 } from "uuid"

import CurrentEvent from './CurrentEvent'
import PastEvent from './PastEvent'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2em 14% 2em 15%;
  
  @media screen and (max-width: 1213px) {
    padding: 2em 5%;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media screen and (max-width: 550px) {
    flex-direction: column;
    zIndex: 10
  }
`

const Title = withTheme(styled.h3`
  font-weight: 400;
  margin-bottom: 0;
  font-size: 1.2em;
  line-height: 1.7em;
  color: ${props => props.theme.text};
  font-family: ${props => props.theme.fontSans};
  
  @media screen and (max-width: 550px) {
    margin-bottom: 20px;
  }
`)

const customSelectStyles = {
  option: () => ({
    padding: "10px",
    border: "none",
  }),
  control: () => ({
    border: "none",
    borderBottom: "1px solid #cecece",
    width: "200px",
    display: "flex",
    flexDirection: "row"
  }),
  indicatorSeparator: () => ({
    display: "none"
  })
}

const EventListContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  box-sizing: border-box;
  z-index: 1;
  
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const PastEventButton = withTheme(styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  font-weight: 400;
  margin-bottom: 0;
  font-size: 1.2em;
  line-height: 1.7em;
  color: ${props => props.theme.text};
  font-family: ${props => props.theme.fontSans};
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.brandSuccess};
  }
  
  @media screen and (max-width: 550px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`)

export default class Events extends Component {
  state = {
    current: [],
    currentFilters: [],
    workingCurrentFilter: undefined,
    past: [],
    pastFilters: [],
    showPast: false,
    workingPastFilter: undefined
  }

  componentDidMount() {
    const { events } = this.props

    const transformEvents = events && events.map(e => ({
      ...e.node,
      startDate: moment(e.node.startDate, "YYYY-MM-DD"),
      endDate: moment(e.node.endDate, "YYYY-MM-DD"),
      image: e.node.image && `https:${e.node.image.file.url}`
    }))

    let past = [];
    let current = [];

    if (transformEvents && transformEvents.length) {
      transformEvents.forEach(o => {
        if (moment(o.endDate).isBefore(moment(), "day")) {
          past.push(o)
        } else {
          current.push(o)
        }
      });
    }

    const currentFilters = current.length && _.uniq(current.map(o => ({
      value: o.type,
      label: o.type
    })))
    const pastFilters = (
        past.length
        && _.uniq(past.map(o => {
        const year = moment(o.endDate).format("YYYY");

        return { value: year, label: year }
      }))
    ) || []

    this.setState({
      past,
      current,
      pastFilters,
      currentFilters
    });
  }

  renderCurrentEvents = ({ current, workingCurrentFilter }) => {
    if (current.length === 0) {
      return (
        <div style={{ textAlign: 'center' }}>
          <Title>There is no events for now.</Title>
        </div>
      )
    }

    if (!workingCurrentFilter) {
      return current.map(o => <CurrentEvent key={v4()} {...o} />)
    }

    return current
        .filter(o => o.type === workingCurrentFilter)
        .map(o => <CurrentEvent key={v4()} {...o} />)
  }

  renderPastEvents = ({ past, workingPastFilter }) => {
    if (past.length === 0) {
      return (
        <div style={{ textAlign: 'center' }}>
          <Title>There is no events for now.</Title>
        </div>
      )
    }

    if (!workingPastFilter) {
      return past.map(o => <PastEvent key={v4()} {...o} />)
    }

    return past
      .filter(o => moment(o.endDate).format("YYYY") === workingPastFilter)
      .map(o => <PastEvent key={v4()} {...o} />)
  }

  render() {
    const { current, currentFilters, past, showPast, pastFilters } = this.state;

    return (
      <Container>
        <Row>
          <Title>
            Upcoming events ({ (current && current.length) || 0 })
          </Title>

          {
            currentFilters.length
            && (
              <Select
                options={currentFilters}
                styles={customSelectStyles}
                isClearable
                placeholder={<span>Event type: <i>All</i></span>}
                onChange={option => this.setState({workingCurrentFilter: (option && option.value) || undefined})}
              />
            )
          }
        </Row>

        <EventListContainer>
          { this.renderCurrentEvents(this.state) }
        </EventListContainer>

        <Row>
          <PastEventButton
            onClick={() => this.setState({ showPast: !showPast })}
          >
            Past Events ({ (past && past.length) || 0 })

            { !showPast ? ` +` : ` −`}
          </PastEventButton>

          {
            showPast && pastFilters.length
              && (
                <Select
                  options={pastFilters}
                  styles={customSelectStyles}
                  isClearable
                  placeholder={<span>Year: <i>All</i></span>}
                  onChange={option => this.setState({ workingPastFilter: (option && option.value) || undefined })}
                />
              )
          }
        </Row>

        { showPast && <div>{ this.renderPastEvents(this.state) }</div> }
      </Container>
    )
  }
}

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape())
}

Events.defaultProps = {
  events: []
}
