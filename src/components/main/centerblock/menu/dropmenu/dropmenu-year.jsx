/* eslint-disable react/prop-types */
import { tracks } from "/src/components/music.data";
import styles from "./dropmenu.module.css";

function PlayTime({ year }) {
  return <div className={styles.dropMenuList}>{year}</div>;
}

const DropMenuYear = () => {
  const handlerNew = () => {
    tracks.sort((a, b) => b.year - a.year);
  };
  const handlerOld = () => {
    tracks.sort((a, b) => a.year - b.year);
  };

  return (
    <>
      <div className={styles.dropMenu}>
        {tracks.map((track) => (
          <PlayTime key={track.id} year={track.year}>
            {track.year}
          </PlayTime>
        ))}
      </div>
      <div className={`${styles.dropMenuYear} dropMenuYear`}>
        <input id="new" name={"radio"} type="radio" onInput={handlerNew} />
        <label htmlFor="new">Более новые</label>
        <input id="old" name={"radio"} type="radio" onInput={handlerOld} />
        <label htmlFor="old">Более старые</label>
      </div>
    </>
  );
};
export default DropMenuYear;
