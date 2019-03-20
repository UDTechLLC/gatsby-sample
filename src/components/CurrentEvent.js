import React from "react"
import styled, { withTheme } from "styled-components"
import moment from "moment"

import { Link, Ribbon } from "./common"

const Container = styled(props => <Link {...props} inner={false} />)`
  text-decoration: none;
  background: #f5f6f7;
  border-radius: 7px;
  box-shadow: 0 2px 2px 2px rgba(0,0,0,.05);
  margin-bottom: 50px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: 3px 3px 3px rgba(0,0,0,0.3)
  }
`
const EventImg = styled.div`
  position: relative;
  z-index: 1;
  height: 140px;
  background: gray;
  border-radius: 7px 7px 0 0;
  background-size: cover;
`
const EventDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 30px;
`

const EventDateBubble = styled.div`
  width: 80px;
  height: 60px;
  background-color: #00bf88;
  border-radius: 5px;
  margin-right: 20px;
  padding: 10px 5px 0 5px;
  text-align: center;
  color: #fff;
  font-weight: 500;
  font-size: 1.1em;
`

const EventTitle = styled.h2`
  font-size: 1.2em;
  margin: 0 0 3px;
  color: #48484b;
  font-family: Roboto, font-sans;
`

const EventPlace = styled.p`
  font-family: Roboto, font-sans;
  margin: 0 0 10px;
  color: #48484b;
`

const RibbonWrapper = styled.div`
  position: absolute;
  display: inline-block;
  margin: 5em;
  text-align: center;
  left: -68px;
  top: -60px;
  z-index: 5;
`

const CurrentEvent = withTheme(({ theme, type, link, name, image, startDate, endDate, city, country }) => {
  const ribbonColor = type => {
    switch (type.toLowerCase()) {
      case "podcast":
        return theme.highlightPurple;
      case "meetup":
        return theme.highlightOrange;
      case "workshop":
          return theme.highlightRed;
      default:
        return undefined;
    }
  }

  return (
    <Container href={link} target="_blank">
      <EventImg style={{ backgroundImage: `url(${image}`}} />

      <EventDetailsWrapper>
        <EventDateBubble>
          {
            moment(startDate).format("MMMM") === moment(endDate).format("MMMM")
              ? moment(startDate).format("MMMM")
              : `${moment(startDate).format("MMM")} - ${moment(endDate).format("MMM")}`
          }

          <br />

          {
            moment(startDate).format("DD") === moment(endDate).format("DD")
              ? moment(startDate).format("DD")
              : `${moment(startDate).format("DD")} - ${moment(endDate).format("DD")}`
          }
        </EventDateBubble>

        <div>
          { name && <EventTitle>{ name }</EventTitle> }

          <EventPlace>
            {
              city && country
                ? `${city}, ${country}`
                : 'Online'
            }
          </EventPlace>
        </div>

        <RibbonWrapper>
          <Ribbon text={type} color={ribbonColor(type)} />
        </RibbonWrapper>
      </EventDetailsWrapper>
    </Container>
  )
})

export default CurrentEvent;
