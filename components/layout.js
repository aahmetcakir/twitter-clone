import React from 'react'
import styles from './layout.module.css'
import Sidebar from './sidebar'
import TrendSection from './trendSection'

function Layout() {
  return (
    <div>
      <Sidebar />
      <Main />
      <TrendSection />
    </div>
  )
}

export default Layout
