import React from 'react'
import styles from './trendsMenu.module.css'
import SearchBox from './search_box'
import TrendsBox from './trends_box'

function TrendsMenu() {
  return (
    <div className={styles.trendsMenu}>
      <SearchBox />
      <TrendsBox />
    </div>
  )
}

export default TrendsMenu
