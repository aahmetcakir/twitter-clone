import React from 'react'
import Button from './button'
import styles from './profile-box.module.css'
import SvgArrowBottom from './icon/ArrowBottom'
import Profile from './profile'
function ProfileBox({ flat = false, pp }) {
  return (
    <Button className={styles.profileBox}>
      <div className={styles.img}>
        <Profile children={pp} />
      </div>
      {!flat && (
        <>
          <div className={styles.profileName}>
            <h4 className={styles.name}>Ahmet ÇAKIR</h4>
            <h6 className={styles.nickname}>@_ahmet_cakir</h6>
          </div>
          <div className={styles.icon}>
            <SvgArrowBottom />
          </div>
        </>
      )}
    </Button>
  )
}

export default ProfileBox
