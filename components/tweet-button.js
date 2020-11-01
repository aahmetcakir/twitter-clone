import React from 'react'
import Button from './button'
import styles from './tweet-button.module.css'
import TweetButtonFull from './tweet-button-full'

function TweetButton({ flat = false, children }) {
  return (
    <Button className={styles.tweetButton}>
      {(!flat && 'Tweetle') || <TweetButtonFull />}
    </Button>
  )
}

export default TweetButton
