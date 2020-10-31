import React from 'react'
import styles from './trends_box.module.css'
import SvgOptions from './icon/Options'
import Trend from './trend'

function TrendsBox() {
  return (
    <div className={styles.trends}>
      <div className={styles.titleBox}>
        <h3 className={styles.title}>Gündemler</h3>
        <div className={styles.icon}>
          <SvgOptions />
        </div>
      </div>
      <Trend>#cumhuriyyetbayramı</Trend>
      <Trend>#29EkimCumhiyetBayramı</Trend>
      <Trend>#MaliyedenÖğrt60Bin</Trend>
      <Trend>#Kızılay Haftası</Trend>
      <h4 className={styles.moreDetails}>Daha fazla göster</h4>
    </div>
  )
}

export default TrendsBox
