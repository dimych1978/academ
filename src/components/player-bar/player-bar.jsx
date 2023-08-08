// import { trackPlay } from '../music.data'
import { useEffect, useState } from "react";
import stylesParents from "/src/App-style/App.module.css";
import { trackPlay } from "../music.data";
import stylesBar from "./bar/bar-style/bar.module.css";
import stylesPlayer from "./controls-style/controls.module.css";
import stylesTrackPlay from "./track-play-style/track-play.module.css";
import stylesVolume from "./volume-style/volume.module.css";
import Progress from "./bar/progress/progress";
import Play from "./bar/play/playButton";

export const audio = new Audio();

function Prev() {
  return (
    <div className={stylesPlayer["_btn-prev"]}>
      <svg className={stylesPlayer["_btn-prev-svg"]} alt="prev">
        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
      </svg>
    </div>
  );
}


function Next() {
  return (
    <div className={stylesPlayer["_btn-next"]}>
      <svg className={stylesPlayer["_btn-next-svg"]} alt="next">
        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
      </svg>
    </div>
  );
}

function Repeat() {
  return (
    <div className={stylesPlayer["_btn-repeat"]}>
      <svg className={stylesPlayer["_btn-repeat-svg"]} alt="repeat">
        <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
      </svg>
    </div>
  );
}

function Shuffle() {
  return (
    <div className={`${stylesPlayer["_btn-shuffle"]} _btn-icon`}>
      <svg className={stylesPlayer["_btn-shuffle-svg"]} alt="shuffle">
        <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
      </svg>
    </div>
  );
}

function NoteIcon() {
  return (
    <div className={stylesTrackPlay._image}>
      <svg className={stylesTrackPlay._svg} alt="music">
        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
      </svg>
    </div>
  );
}

function LikeIcon() {
  return (
    <div className={`${stylesTrackPlay._like} _btn-icon`}>
      <svg className={stylesTrackPlay["_like-svg"]} alt="like">
        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
      </svg>
    </div>
  );
}

function DislikeIcon() {
  return (
    <div className={`${stylesTrackPlay["_dislike"]} _btn-icon`}>
      <svg className={stylesTrackPlay["_dislike-svg"]} alt="dislike">
        <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
      </svg>
    </div>
  );
}

function VolumeBar() {
  return (
    <div className={`${stylesBar["_volume-block"]} volume`}>
      <div className={stylesVolume._content}>
        <div className={stylesVolume._image}>
          <svg className={stylesVolume._svg} alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </svg>
        </div>
        <div className={`${stylesVolume._progress} _btn`}>
          <input
            className={`${stylesVolume["_progress-line"]} _btn`}
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  );
}

function PlayData() {
  return (
    <div className={stylesTrackPlay._contain}>
      <NoteIcon />
      <div className={stylesTrackPlay._author}>
        <a className={stylesTrackPlay["_author-link"]} href="http://">
          {trackPlay.author}
        </a>
      </div>
      <div className={stylesTrackPlay._album}>
        <a className={stylesTrackPlay["_album-link"]} href="http://">
          {trackPlay.album}
        </a>
      </div>
    </div>
  );
}

function PlayBar() {
  const [trackName, setTrackName] = useState();

  useEffect( () => setTrackName("/Bobby_Marleni_-_Dropin.mp3"));
  return (
    <div className={stylesParents.bar} >
      <div className={stylesBar._controls}>
        <Progress trackName={trackName} />
        <div className={stylesBar["_player-block"]}>
          <div className={`${stylesBar._player} player`}>
            <div className={stylesPlayer._controls}>
              <Prev />
              <Play trackName={trackName} />
              <Next />
              <Repeat />
              <Shuffle />
            </div>
            <div className={`${stylesPlayer["_track-play"]} track-play`}>
              <PlayData />
              <div className={stylesTrackPlay["_like-dis"]}>
                <LikeIcon />
                <DislikeIcon />
              </div>
            </div>
          </div>
          <VolumeBar />
        </div>
      </div>
    </div>
  );
}
export default PlayBar;
