import React from "react"
import SortButton from "./SortButton"
import SearchBar from "./SearchBar"
import NewPostBtn from "./NewPostBtn"

const Header = () => {
  return (
    <header className="flex flex-row bg-transparent h-[15%] w-full text-white items-center">
      <div className="title flex flex-col text-transparent bg-clip-text bg-[linear-gradient(to_bottom,_#324659_50%,_#6190A7_100%)] text-5xl font-dmserif pl-6 pt-4 h-full">
        <a>Panora</a>
        <a className="text-2xl">Anonymous Truths</a>
      </div>

      <SearchBar />

      <div className="sort-btn">
        <SortButton />
      </div>

      <div className="new-post-btn mt-1 mx-4">
        <NewPostBtn />
      </div>
    </header>
  )
}

export default Header
