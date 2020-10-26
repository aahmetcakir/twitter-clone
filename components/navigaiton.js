import React from 'react'
import MenuButton from './menu-button'
import styles from './navigation.module.css'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from './icon'
import TweetButton from './tweet-button'
import ProfileBox from './profile-box'

function Navigation() {
  return (
    <nav className={styles.navButtons}>
      <MenuButton>
        <Twitter />
      </MenuButton>
      <MenuButton>
        <Home />
        <span>Anasayfa</span>
      </MenuButton>
      <MenuButton>
        <Explore />
        <span>Keşfet</span>{' '}
      </MenuButton>
      <MenuButton>
        <Notification />
        <span>Bildirimler</span>{' '}
      </MenuButton>
      <MenuButton>
        <Messages />
        <span>Mesajlar</span>{' '}
      </MenuButton>
      <MenuButton>
        <Bookmark />

        <span>Yer İşaretleri</span>
      </MenuButton>
      <MenuButton>
        <Lists />
        <span>Listeler</span>{' '}
      </MenuButton>
      <MenuButton>
        <Profile />
        <span>Profil</span>{' '}
      </MenuButton>
      <MenuButton>
        <More />
        <span>Daha fazla</span>{' '}
      </MenuButton>
      <TweetButton>Tweetle</TweetButton>

      <ProfileBox />
    </nav>
  )
}

export default Navigation
