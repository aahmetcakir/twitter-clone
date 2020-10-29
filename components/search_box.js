import React from 'react'
import styles from './search_box.module.css'
import SvgSearch from './icon/Search'

function SearchBox() {
  return (
    <div className={styles.searchBox}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder={"Twitter'da Ara"}
      />
      <SvgSearch />
    </div>
  )
}

export default SearchBox
