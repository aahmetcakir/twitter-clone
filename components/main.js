import React from 'react'
import styles from './main.module.css'
import TweetNormal from './tweet-normal'
import TweetPhoto from './tweet-photo'

function Main() {
  return (
    <div className={styles.main}>
      <TweetNormal
        pp={
          'https://pbs.twimg.com/profile_images/1322853331073671169/bcNaQF8Y_400x400.jpg'
        }
        dk={'15d'}
      >
        MIT’de verilen ‘bilgisayar muhendisiligindeki eksik donem’ adli ders
        TR’ye tamamen cevrilmis
      </TweetNormal>
      <TweetPhoto
        dk={'8d'}
        pp={
          'https://pbs.twimg.com/profile_images/1322853331073671169/bcNaQF8Y_400x400.jpg'
        }
      >
        Bu ay boyunca 14 yıllık SEO, 8 yıllık ajans yönetimi, 2 yıllık ürün
        yönetiminde yaptığım hatalardan öğrendiklerimi sorularınızı
        yanıtlandırmak için paylaşacağım. Tüm gelirleri @superpeer üzerinden
        @AKUT_Dernegi 'ne İzmir için bağışlanacak. Destek için:
        https://superpeer.com/yigit{' '}
      </TweetPhoto>
      <TweetPhoto
        dk={'8d'}
        pp={
          'https://pbs.twimg.com/profile_images/1322853331073671169/bcNaQF8Y_400x400.jpg'
        }
      >
        Bu ay boyunca 14 yıllık SEO, 8 yıllık ajans yönetimi, 2 yıllık ürün
        yönetiminde yaptığım hatalardan öğrendiklerimi sorularınızı
        yanıtlandırmak için paylaşacağım. Tüm gelirleri @superpeer üzerinden
        @AKUT_Dernegi 'ne İzmir için bağışlanacak. Destek için:
        https://superpeer.com/yigit{' '}
      </TweetPhoto>
      <TweetNormal
        pp={
          'https://pbs.twimg.com/profile_images/1322853331073671169/bcNaQF8Y_400x400.jpg'
        }
        dk={'15d'}
      >
        MIT’de verilen ‘bilgisayar muhendisiligindeki eksik donem’ adli ders
        TR’ye tamamen cevrilmis
      </TweetNormal>
      <TweetNormal
        pp={
          'https://pbs.twimg.com/profile_images/1322853331073671169/bcNaQF8Y_400x400.jpg'
        }
        dk={'15d'}
      >
        MIT’de verilen ‘bilgisayar muhendisiligindeki eksik donem’ adli ders
        TR’ye tamamen cevrilmis
      </TweetNormal>
      <TweetPhoto
        dk={'8d'}
        pp={
          'https://pbs.twimg.com/profile_images/1322853331073671169/bcNaQF8Y_400x400.jpg'
        }
      >
        Bu ay boyunca 14 yıllık SEO, 8 yıllık ajans yönetimi, 2 yıllık ürün
        yönetiminde yaptığım hatalardan öğrendiklerimi sorularınızı
        yanıtlandırmak için paylaşacağım. Tüm gelirleri @superpeer üzerinden
        @AKUT_Dernegi 'ne İzmir için bağışlanacak. Destek için:
        https://superpeer.com/yigit{' '}
      </TweetPhoto>
    </div>
  )
}

export default Main
