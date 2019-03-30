import React from 'react'

import Layout from '../components/Layout'
import { Link } from '../components/common'

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
          <h1>Hello world</h1>
        </div>
      ),
    }}
  >
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
