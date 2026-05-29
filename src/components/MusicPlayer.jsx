import { useEffect, useRef, useState } from "react"
import "./MusicPlayer.css"

function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    audioRef.current = new Audio("/music.mp3")
    audioRef.current.loop = true
    audioRef.current.volume = 0.4
    return () => {
      audioRef.current.pause()
    }
  }, [])

  const toggle = () => {
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <button
      className={`music-btn ${playing ? "playing" : ""}`}
      onClick={toggle}
      title={playing ? "Pause Music" : "Play Music"}
    >
      <span className="music-icon">
        {playing ? (
          <span className="bars">
            <span /><span /><span /><span />
          </span>
        ) : (
          "♪"
        )}
      </span>
      <span className="music-tooltip">
        {playing ? "Pause Music" : "Play Music"}
      </span>
    </button>
  )
}

export default MusicPlayer