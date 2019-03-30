import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Events from '../components/Events'
import { Link } from '../components/common'

const eventsQuery = graphql`
  query EventsPageQuery {
    events: allContentfulEvent(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          name
          link
          image {
            file {
              url
            }
          }
          title
          type
          country
          city
          startDate
          endDate
        }
      }
    }
  }
`

const EventsPage = () => (
  <Layout
    hero={{
      tagLine: 'Catch the Cypress team at these events',
      byLine: (
        <div>
          {'To stay in the loop, subscribe to our newsletter or follow '}
          <Link
            inner={false}
            href="https://twitter.com/Cypress_io"
            target="blank"
          >
            @Cypress_io
          </Link>
          {' Twitter!'}
        </div>
      ),
    }}
  >
    <SEO title="Catch the Cypress team at these events" />

    <StaticQuery // pass events to event component
      query={eventsQuery}
      render={data => (
        <Events events={data && data.events && data.events.edges} />
      )}
    />
  </Layout>
)

export default EventsPage
