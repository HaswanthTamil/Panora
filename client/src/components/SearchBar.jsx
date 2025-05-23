import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const SearchBar = () => {
  return (
    <div
      className="search-bar bg-gradient-to-r from-[#6190A7] to-[#192A3B] w-[40%] h-1/2 gap-2 px-4 py-2 mx-4 my-6 rounded-[24px]
  flex items-center transition-all duration-300 ease-in-out
  hover:scale-[1.02] hover:shadow-[0_0_10px_#6190A7] hover:bg-opacity-90"
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none px-4 w-[80%]"
      />
    </div>
  )
}

export default SearchBar
