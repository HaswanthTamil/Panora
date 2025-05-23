import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"

const NewPostBtn = () => {
  return (
    <FontAwesomeIcon
      icon={faSquarePlus}
      className="flex items-center gap-2 px-4 py-2 text-white bg-slate-800 rounded-md hover:bg-slate-700 transition-all"
    />
  )
}

export default NewPostBtn
