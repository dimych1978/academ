/* eslint-disable react/prop-types */
import { tracks } from '../../../../music.data'
import styles from './dropmenu.module.css'

function PlayAuthor({ author }) {
  return (
    <div className={styles.dropMenuList}>
      <a className={styles.dropMenuList} href="http://">
        {author}
      </a>
    </div>
  )
}

const DropMenuAuthor = () => {
  return (
    <div className={styles.dropMenu}>
      {tracks.map((track) => (
        <PlayAuthor key={track.id} author={track.author} />
      ))}
    </div>
  )
}

export default DropMenuAuthor
