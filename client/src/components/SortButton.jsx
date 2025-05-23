import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHeart,
  faArrowDownShortWide,
  faArrowUpShortWide,
} from "@fortawesome/free-solid-svg-icons"
import { FaThumbsUp } from "react-icons/fa"
import { useState } from "react"

const SortButton = () => {
  const [sortMode, setSortMode] = useState("new")

  const nextSort = () => {
    const modes = ["new", "old", "liked", "helpful"]
    const next = modes[(modes.indexOf(sortMode) + 1) % modes.length]
    setSortMode(next)
  }

  const getIcon = () => {
    switch (sortMode) {
      case "new":
        return (
          <FontAwesomeIcon icon={faArrowDownShortWide} title="Newest First" />
        )
      case "old":
        return (
          <FontAwesomeIcon icon={faArrowUpShortWide} title="Oldest First" />
        )
      case "helpful":
        return <FaThumbsUp title="Most Helpful" />
      case "liked":
        return <FontAwesomeIcon icon={faHeart} title="Most Liked" />
      default:
        return <FaClock />
    }
  }

  return (
    <button
      className="flex items-center gap-2 px-4 py-2 text-white bg-slate-800 rounded-md hover:bg-slate-700 transition-all"
      onClick={nextSort}
    >
      {getIcon()}
    </button>
  )
}

export default SortButton
