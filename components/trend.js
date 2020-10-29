import React from 'react'
import styles from './trend.module.css'
import SvgArrowBottom from './icon/ArrowBottom'

function Trend({ children }) {
  return (
    <div className={styles.trend}>
      <div className={styles.Titles}>
        <h6 className={styles.TopTitle}>Türkiye'de Trend</h6>
        <h2 className={styles.Title}>{children}</h2>
        <h4 className={styles.BottomTitle}>17.9 B Tweet</h4>
      </div>
      <div className={styles.icon}>
        <SvgArrowBottom />
      </div>
    </div>
  )
}

export default Trend
