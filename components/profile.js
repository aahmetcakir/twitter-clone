import React from 'react'
import Button from './button'
import styles from './profile.module.css'

function Profile({ children }) {
  return <img className={styles.image} src={children} />
}

export default Profile
