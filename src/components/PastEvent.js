import React from 'react'
import styled, { withTheme } from 'styled-components'
import moment from 'moment'

import { Link } from './common'

const Wrapper = withTheme(styled.div`
  display: grid;
  border-top: 1px solid ${props => props.theme.text};
  grid-template-columns: 1fr 0.5fr 1fr 1fr 0.5fr;
  column-gap: 5px;

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`)

const Text = withTheme(styled.div`
  display: flex;
  color: ${props => props.theme.text};
  overflow: hidden;
  padding: 8px;
`)

const PastEvent = withTheme(
  ({ theme, name, type, startDate, endDate, city, country, link }) => (
    <Wrapper>
      <Text>{name}</Text>

      <Text>{type}</Text>

      <Text>
        {`
        ${moment(startDate).format('MMMM')}
        ${
          moment(startDate).format('DD') === moment(endDate).format('DD')
            ? moment(startDate).format('DD')
            : `${moment(startDate).format('DD')} - ${moment(endDate).format(
                'DD'
              )}`
        },
        ${moment(startDate).format('YYYY')}
      `}
      </Text>

      <Text>{city && country ? `${city}, ${country}` : 'Online'}</Text>

      <Link
        inner={false}
        href={link}
        target="_blank"
        style={{
          color: theme.text,
          textDecoration: 'underline',
          display: 'inline-flex',
          justifyContent: 'flex-end',
          padding: '8px',
        }}
      >
        Learn More
      </Link>
    </Wrapper>
  )
)

export default PastEvent
