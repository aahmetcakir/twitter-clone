import React from 'react'
import styles from './tweet-normal.module.css'
import Profile from './profile'
import SvgArrowBottom from './icon/ArrowBottom'
import SvgLike from './icon/Like'
import SvgShare from './icon/Share'
import SvgRetweet from './icon/Retweet'
import SvgReply from './icon/Reply'

function TweetNormal({ children, dk, pp }) {
  return (
    <div className={styles.post}>
      <div className={styles.postAll}>
        <Profile children={pp} />
        <div className={styles.profileName}>
          <div className={styles.postInfo}>
            <h4 className={styles.name}>Ahmet ÇAKIR</h4>
            <h6 className={styles.nickname}>@_ahmet_cakir</h6>
            <h6 className={styles.postTime}>۰ {dk}</h6>
          </div>
          <div className={styles.postText}>
            <p>{children}</p>
          </div>
        </div>
        <div className={styles.icon}>
          <SvgArrowBottom />
        </div>
      </div>
      <div className={styles.iconsSection}>
        <div className={styles.bottomIcon}>
          <SvgReply />
        </div>
        <div className={styles.bottomIcon}>
          <SvgRetweet />
        </div>
        <div className={styles.bottomIcon}>
          <SvgLike />
        </div>
        <div className={styles.bottomIcon}>
          <SvgShare />
        </div>
      </div>
    </div>
  )
}

export default TweetNormal
