import { useState } from "react"
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa"

const UsefulToggle = () => {
  const [useful, setUseful] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setUseful(!useful)
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
      {useful || hovered ? <FaThumbsUp /> : <FaRegThumbsUp />}
    </button>
  )
}

export default UsefulToggle
