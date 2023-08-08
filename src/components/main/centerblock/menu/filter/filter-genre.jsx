import { useEffect, useRef, useState } from 'react'
import DropMenuGenre from '../dropmenu/dropmenu-genre.jsx'
import styles from './filter-style/filter.module.css'
import stylesActive from '../dropmenu/dropmenu.module.css'
import { tracks } from '/src/components/music.data.js'

const Count = () => {
  return (
    <span className={stylesActive.dropMenuActiveRound}>
      {tracks.filter((track) => track.genre.length).length}
    </span>
  )
}

function FilterGenre() {
  const divRef = useRef()
  const [status, setStatus] = useState('none')

  const clickOut = (e) => {
    const hasDiv = document.querySelector('.button-genre')
    if (e.target !== hasDiv) {
      setStatus('none')
    } else {
      setStatus('block')
    }
  }

  useEffect(() => {
    window.addEventListener('click', clickOut)
    return () => {
      window.removeEventListener('click', clickOut)
    }
  }, [])

  return (
    <div
      className={`${styles._button} button-genre _btn-text ${
        status === 'block' ? stylesActive.dropMenuActive : ''
      }`}
      onClick={clickOut}
    >
      {status === 'block' ? <Count /> : ''}
      <div ref={divRef} style={{ display: status, position: 'absolute' }}>
        <DropMenuGenre />
      </div>
      жанру
    </div>
  )
}
export default FilterGenre
