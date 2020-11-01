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
import TweetNormal from './tweet-normal'
const MENU = [
  {
    key: 'home',
    icon: <Home />,
    title: 'Anasayfa'
  },
  {
    key: 'explore',
    icon: <Explore />,
    title: 'Keşfet'
  },
  {
    key: 'notification',
    icon: <Notification />,
    title: 'Bildirimler'
  },
  {
    key: 'messages',
    icon: <Messages />,
    title: 'Mesajlar'
  },
  {
    key: 'bookmark',
    icon: <Bookmark />,
    title: 'Yer İşaretleri'
  },
  {
    key: 'lists',
    icon: <Lists />,
    title: 'Listeler'
  },
  {
    key: 'profile',
    icon: <Profile />,
    title: 'Profil'
  },
  { key: 'more', icon: <More />, title: 'Daha fazla' }
]
function Navigation({ flat = false }) {
  const showTitle = !flat
  return (
    <nav className={styles.navButtons}>
      <MenuButton>
        <div className={styles.birdIcon}>
          <Twitter />
        </div>
      </MenuButton>
      {MENU.map((menu) => (
        <MenuButton>
          {menu.icon}
          {showTitle && <span>{menu.title}</span>}
        </MenuButton>
      ))}
      <TweetButton flat={!showTitle}>Tweetle</TweetButton>
      <ProfileBox
        flat={!showTitle}
        pp={
          'https://pbs.twimg.com/profile_images/1322853331073671169/bcNaQF8Y_400x400.jpg'
        }
      />
    </nav>
  )
}

export default Navigation
