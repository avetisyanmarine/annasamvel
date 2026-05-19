import { useRef, useState, useEffect } from "react";
import { MusicPagePart } from "./styled";
import Music from "../../assets/vectors/music.png";
import Song from "../../assets/audio/song.mp3";

export const MusicPage = ({ isPlaying }) => {
  const audioRef = useRef(null);
  const [isCurrentPlaying, setIsCurrentPlaying] = useState(false);

  // Սա կաշխատի միայն այն ժամանակ, երբ երգի ֆայլը հաջողությամբ կբեռնվի բրաուզերում
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
    }
  };

  // Սինքրոնիզացիա ծնող (parent) կոմպոնենտի prop-ի հետ
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play()
        .then(() => setIsCurrentPlaying(true))
        .catch((err) => console.log("Autoplay blocked or interrupted:", err));
    } else {
      audioRef.current.pause();
      setIsCurrentPlaying(false);
    }
  }, [isPlaying]);

  const handleClick = () => {
    if (!audioRef.current) return;

    if (isCurrentPlaying) {
      audioRef.current.pause();
      setIsCurrentPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsCurrentPlaying(true))
        .catch((err) => console.log("Playback failed:", err));
    }
  };

  return (
    <MusicPagePart onClick={handleClick} style={{ opacity: isCurrentPlaying ? 1 : 0.5 }}>
      <img loading="lazy" src={Music} alt="music toggle" />
      {/* Ավելացրել ենք onLoadedMetadata իրադարձությունը (event) */}
      <audio 
        ref={audioRef} 
        src={Song} 
        loop 
        onLoadedMetadata={handleLoadedMetadata} 
      />
    </MusicPagePart>
  );
};