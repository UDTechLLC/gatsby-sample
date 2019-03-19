import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import moment from "moment"
import _ from "lodash"
import Select from "react-select"
import { v4 } from "uuid"

import CurrentEvent from './CurrentEvent'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2em 14% 2em 15%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1
`

const Title = styled.h3`
  font-weight: 400;
  margin-bottom: 0;
  font-size: 1.2em;
  line-height: 1.7em;
  color: #394656;
  font-family: Roboto,font-sans;
`

const customSelectStyles = {
  option: () => ({
    padding: "10px",
    border: "none"
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
`

export default class Events extends Component {
  state = {
    current: [],
    past: [],
    pastFilters: [],
    currentFilters: [],
    workingCurrentFilter: undefined
  }

  componentDidMount() {
    const { events } = this.props

    const transformEvents = events.map(e => ({
      ...e.node,
      startDate: moment(e.node.startDate, "YYYY-MM-DD"),
      endDate: moment(e.node.endDate, "YYYY-MM-DD"),
      image: `https:${e.node.image.file.url}`
    }))

    let past = [];
    let current = [];

    transformEvents.forEach(o => {
      if (moment(o.endDate).isBefore(moment(), "day")) {
        past.push(o)
      } else {
        current.push(o)
      }
    });

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
    }, () => console.log(this.state));
  }

  renderCurrentEvents = ({ current, workingCurrentFilter }) => {
    if (!workingCurrentFilter) {
      return current.map(o => <CurrentEvent key={v4()} {...o} />)
    }

    return current
        .filter(o => o.type === workingCurrentFilter)
        .map(o => <CurrentEvent key={v4()} {...o} />)
  }

  render() {
    const { current, currentFilters } = this.state;

    return (
      <Container>
        <Row>
          <Title>
            Upcoming events ({ (current && current.length) || 0 })
          </Title>

          <Select
            options={currentFilters}
            styles={customSelectStyles}
            isClearable
            placeholder={<span>Event type: <i>All</i></span>}
            onChange={option => this.setState({ workingCurrentFilter: (option && option.value) || undefined })}
          />
        </Row>

        <EventListContainer>
          { this.renderCurrentEvents(this.state) }
        </EventListContainer>
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
