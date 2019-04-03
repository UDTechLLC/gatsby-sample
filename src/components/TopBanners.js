import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import moment from 'moment'
import { v4 } from 'uuid'
import styled from 'styled-components'

import TopBannersItem from './TopBannersItem'

// styles
const AllBannersWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
// query
const topBannersQuery = graphql`
  query TopBannerQuery {
    dynamicHeader: allContentfulTopBanner {
      banners: edges {
        node {
          startDate
          endDate
          text {
            formatted: childContentfulRichText {
              html
            }
          }
          buttonText
          buttonLink
        }
      }
    }
  }
`

const TopBanners = () => (
  <StaticQuery
    query={topBannersQuery}
    render={({ dynamicHeader }) => {
      // get data from cypress
      const rawData = dynamicHeader && dynamicHeader.banners
      // if there is some data - format it, or show empty array
      const banners = !(rawData && rawData[0] && rawData[0].node)
        ? []
        : rawData.map(b => ({
            // date to moment js format
            startDate: moment(b.node.startDate),
            endDate: moment(b.node.endDate),
            // and remove all redundant nesting
            text: b.node.text.formatted.html,
            buttonText: b.node.buttonText,
            buttonLink: b.node.buttonLink,
          }))

      return (
        <AllBannersWrapper>
          {banners &&
            banners.length &&
            banners.map(props => <TopBannersItem {...props} key={v4()} />)}
        </AllBannersWrapper>
      )
    }}
  />
)

export default TopBanners
