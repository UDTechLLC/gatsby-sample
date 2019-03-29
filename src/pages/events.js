import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import IntroHeader from '../components/IntroHeader'
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
  <Layout>
    <Seo title="Events page" />

    <IntroHeader
      title="Catch the Cypress team at these events"
      subtitle={
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
      }
    />

    <StaticQuery // pass events to event component
      query={eventsQuery}
      render={data => (
        <Events events={data && data.events && data.events.edges} />
      )}
    />

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default EventsPage
