import React from 'react'
import Button from './button'
import styles from './profile.module.css'

function Profile({ children }) {
  return (
    <img
      className={styles.image}
      src={
        'https://pbs.twimg.com/profile_images/1175500431772045314/sRY3RqAA_400x400.jpg'
      }
    />
  )
}

export default Profile
