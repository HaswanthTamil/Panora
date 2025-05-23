import { useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"

const HeartToggle = () => {
  const [liked, setLiked] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setLiked(!liked)
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
      {liked || hovered ? <FaHeart /> : <FaRegHeart />}
    </button>
  )
}

export default HeartToggle
