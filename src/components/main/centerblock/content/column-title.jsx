import stylesCol from "./playlist/playlist-title/playlist-title..module.css";
import styles from "./content-style/content.module.css";

function TimeIcon() {
  return (
    <svg className={stylesCol._svg} alt="time">
      <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
    </svg>
  );
}

function ColumnTitle() {
  return (
    <div className={styles._title}>
      <div className={`${stylesCol._col} ${stylesCol.col01}`}>Трек</div>
      <div className={`${stylesCol._col} ${stylesCol.col02}`}>ИСПОЛНИТЕЛЬ</div>
      <div className={`${stylesCol._col} ${stylesCol.col03}`}>АЛЬБОМ</div>
      <div className={`${stylesCol._col} ${stylesCol.col04}`}>
        <TimeIcon />
      </div>
    </div>
  );
}

export default ColumnTitle;
