import { tracks } from '../../../../music.data'
import styles from './dropmenu.module.css'

function PlayGenre({ genre }) {
  return (
    <div className={styles.dropMenuList}>
        {genre}
    </div>
  )
}

const DropMenuGenre = () => {
  return (
    <div className={styles.dropMenu}>
      {tracks.map((track) => (
        <PlayGenre key={track.id} genre={track.genre}>
          {track.genre}
        </PlayGenre>
      ))}
    </div>
  )
}
export default DropMenuGenre
