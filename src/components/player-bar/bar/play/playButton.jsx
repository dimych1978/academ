import { useEffect } from "react";
import stylesPlayer from "../../controls-style/controls.module.css";
import { audio } from "../../player-bar";

function Play({trackName}) {
  useEffect(() => {
    audio.src = trackName;
      // audio.ontimeupdate = () => {
      // console.log(audio.currentTime)};
});

  return (
    <div
      className={`${stylesPlayer["_btn-play"]} _btn`}
      onClick={() => {audio.play()}}
      onDoubleClick={() => {
        audio.pause();
      }}
    >
      <svg className={stylesPlayer["_btn-play-svg"]} alt="play">
        <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
      </svg>
    </div>
  );
}

export default Play;
