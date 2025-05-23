import React from "react"
import HeartToggle from "./HeartToggle"
import UsefulToggle from "./UsefulToggle"
import FlagPost from "./FlagPost"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PostCard = () => {
  return (
    <div
      className="post-card w-[20%] bg-[#2F4A5D] flex flex-col justify-center my-2 rounded-md"
      style={{ height: "calc(20vw + 50px)" }}
    >
      <div className="post-header text-gray-300 px-2 flex justify-between">
        <a className="overflow-hidden">Title</a>
        <a>
          <FontAwesomeIcon icon={faStar} className="text-md text-slate-300" />
        </a>
      </div>
      <div className="image w-full bg-black" style={{ aspectRatio: "1 / 1" }}>
        Image
      </div>
      <div className="post-attributes flex justify-between items-center">
        <div className="flex space-x-2 px-2">
          <HeartToggle />
          <UsefulToggle />
        </div>
        <div className="px-2">
          <FlagPost />
        </div>
      </div>
    </div>
  )
}

export default PostCard
