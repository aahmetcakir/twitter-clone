import React from 'react'
import styles from './sidebar.module.css'
import Navigation from './navigaiton'
import useWindowSize from '../hooks/useWindowsSize'

function Sidebar() {
  const size = useWindowSize()
  return <div className={styles.sidebar}>
  <div className={styles.sidebars}>

   <Navigation flat={size.width < 1270} />
  </div>

  </div>
}

export default Sidebar
