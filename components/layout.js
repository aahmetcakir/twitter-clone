import React from 'react'
import styles from './layout.module.css'
import Sidebar from './sidebar'
import TrendSection from './trendSection'
import Main from './main'
import useWindowSize from '../hooks/useWindowsSize'
import ProfileBox from './profile-box'

function Layout() {
  const size = useWindowSize()
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Main />
      {size.width > 980 && <TrendSection />}
    </div>
  )
}

export default Layout
