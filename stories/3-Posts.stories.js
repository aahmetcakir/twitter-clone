import React from 'react'
import TweetNormal from '../components/tweet-normal'
import TweetPhoto from '../components/tweet-photo'

export default {
  title: 'Posts'
}
export const TweetNormalSb = () => (
  <TweetNormal
    pp={
      'https://pbs.twimg.com/profile_images/1322853331073671169/bcNaQF8Y_400x400.jpg'
    }
    dk={'15d'}
  >
    MIT’de verilen ‘bilgisayar muhendisiligindeki eksik donem’ adli ders TR’ye
    tamamen cevrilmis
  </TweetNormal>
)
export const TweetPhotosSb = () => (
  <TweetPhoto
    dk={'8d'}
    pp={
      'https://pbs.twimg.com/profile_images/1322853331073671169/bcNaQF8Y_400x400.jpg'
    }
  >
    MIT’de verilen ‘bilgisayar muhendisiligindeki eksik donem’ adli ders TR’ye
    tamamen cevrilmis{' '}
  </TweetPhoto>
)
