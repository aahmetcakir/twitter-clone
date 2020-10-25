import React from 'react'
import Button from './button'
import styles from './tweet-button.module.css'

function TweetButton({ children }) {
  return <Button className={styles.tweetButton}>{children}</Button>
}

export default TweetButton
