import React from 'react'
import Navigation from '../components/navigaiton'
import TrendMenu from '../components/tredsMenu'

function HomePage() {
  return (
    <Layout className={'layout'}>
      <Sidebar className={'navi'}>
        <Navigation />
      </Sidebar>
      <TrendsSection className={'trendBox'}>
        <TrendMenu />
      </TrendsSection>
    </Layout>
  )
}

export default HomePage
