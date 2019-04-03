import React from 'react'

import Layout from '../components/Layout'
import { Link } from '../components/common'
import SEO from '../components/SEO'
import InstallMethod from '../components/InstallMethod'

const IndexPage = () => (
  <Layout
    hero={{
      tagLine: (
        <div>
          The web has evolved.
          <br />
          Finally, testing has too.
        </div>
      ),
      byLine:
        'Fast, easy and reliable testing for anything that runs in a browser.',
      epilogue: (
        <div>
          <InstallMethod />
        </div>
      ),
    }}
  >
    <SEO title="JavaScript End to End Testing Framework" />

    <ul>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/page-2">Page 2</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
