import { useEffect, useRef, useState } from 'react'
import DropMenuYear from '../dropmenu/dropmenu-year'
import stylesActive from '../dropmenu/dropmenu.module.css'
import styles from './filter-style/filter.module.css'
import { tracks } from '/src/components/music.data'

const Count = () => {
  return (
    <span className={stylesActive.dropMenuActiveRound}>
      {tracks.filter((track) => track.year.length).length}
    </span>
  )
}

function FilterYear() {
  const divRef = useRef()
  const [status, setStatus] = useState('none')

  const clickOut = (e) => {
    const hasDiv = document.querySelector('.button-year')
    const hasSelector = document.querySelector('.dropMenuYear')
    if (e.target !== hasDiv && e.target !== hasSelector) {
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
      className={`${styles._button} button-year _btn-text ${
        status === 'block' ? stylesActive.dropMenuActive : ''
      }`}
      onClick={clickOut}
    >
      {status === 'block' ? <Count /> : ''}
      <div ref={divRef} style={{ display: status, position: 'absolute' }}>
        <DropMenuYear />
      </div>
      году выпуска
    </div>
  )
}
export default FilterYear
