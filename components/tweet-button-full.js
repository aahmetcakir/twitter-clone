import React from 'react'
import Button from './button'
import styles from './tweet-button-full.module.css'
import SvgSearch from './icon/Search'

function TweetButtonFull() {
  return (
    <Button className={styles.tweetButtons}>
      <SvgSearch />
    </Button>
  )
}

export default TweetButtonFull
