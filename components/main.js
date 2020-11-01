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
        bu kadar hızlı değişen ve gelişen teknoloji dünyasında ürün satın almak
        çok manasız geliyor her defasında. telefondaki uygulama mağazası gibi
        her şeyde abonelik modeli olsa fena olmaz. min 3 aylık, 6 aylık, veya
        yıllık. elimdekini satıp yenisini alayım derdi ortadan kalkıyor.{' '}
      </TweetPhoto>
      <TweetPhoto
        dk={'24 May 2018 '}
        pp={
          'https://pbs.twimg.com/profile_images/1322853331073671169/bcNaQF8Y_400x400.jpg'
        }
      >
        facebook, airbnb, stripe, snapchat, .. bu şirketlerden birinde çalışmak
        ister misin? şu linki baştan sona bitir, ingilizceni akıcı hale getir,
        teknik mülakat konusunda kendini geliştir. senelik min. 100 bin dolar
        maaş garanti Oldu{' '}
      </TweetPhoto>
      <TweetNormal
        pp={
          'https://pbs.twimg.com/profile_images/1322853331073671169/bcNaQF8Y_400x400.jpg'
        }
        dk={'46d'}
      >
        “zenginler varlığını yatırım için kullanırken fakirler zenginmiş gibi
        parasını harcıyor.” — sizce bireylerin bulunduğu finansal konum için
        verdiği kararlar, tercihleri ne kadar önemli?
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
        dk={'26 Eki'}
        pp={
          'https://pbs.twimg.com/profile_images/1322853331073671169/bcNaQF8Y_400x400.jpg'
        }
      >
        kullanmadığım hiç bi şeyi anlatmadım. gerçekten bildiğim ve canlıya
        çıkmış projelerde kullandığım araçları anlattım. yeni bi şey öğrenme
        kısmı ise proje yaparken öğrenirim yani bunu öğreneyim lazım olur diye
        bi şey öğrenmem, fikrim olması için neyi çözdüğüne bakarım.{' '}
      </TweetPhoto>
    </div>
  )
}

export default Main
