import { useEffect, useRef, useState } from "react";
import stylesBar from "../bar-style/bar.module.css";
import { audio } from "../../player-bar";

const Progress = () => {
  const ref = useRef();
  const [backgroundBar, setBackgroundBar] = useState("");
  const [widthBar, setWithBar] = useState("");

  useEffect(() => {
    audio.ontimeupdate = () => {
      setWithBar((audio.currentTime / audio.duration) * 100 + "%");
      setBackgroundBar("#B672FF");
    };
  });
  const handleTime = (e) => {
    const widthCurrent =
      ((e.clientX - ref.current.offsetLeft) / ref.current.offsetWidth) * 100;
    audio.currentTime =audio.duration  * widthCurrent /100  ;
  };

  return (
    <div
      ref={ref}
      style={{width: '100%'}}
      className={stylesBar["_player-progress"]}
      onClick={handleTime}
    >
      <span style={{ width: widthBar, background: backgroundBar }} />
      <span />
    </div>
  );
};

export default Progress;
