import { useState } from "react"
import { FaFlag, FaRegFlag } from "react-icons/fa"

const FlagPost = () => {
  const [flagged, setFlagged] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setFlagged(!flagged)
    setClicked(true)
    setTimeout(() => setClicked(false), 200)
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`text-md text-slate-300 transition-transform duration-200 transform ${
        clicked ? "scale-125" : "scale-100"
      }`}
    >
      {flagged || hovered ? <FaFlag /> : <FaRegFlag />}
    </button>
  )
}

export default FlagPost
