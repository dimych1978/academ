import { tracks } from "/src/components/music.data";
import PlayList from "./playlist/playlist";
import ColumnTitle from "./column-title";
import stylesParents from "/src/components/main/centerblock/centerblock-style/centerblock.module.css";
import styles from "./content-style/content.module.css";

function Content() {
  return (
    <div className={stylesParents._content}>
      <ColumnTitle />
      <div className={styles._playlist}>
        {tracks.map((track) => (
          <PlayList
            key={track.id}
            author={track.author}
            title={track.title}
            span={track.span}
            album={track.album}
            time={track.trackTime}
          />
        ))}
      </div>
    </div>
  );
}
export default Content;
