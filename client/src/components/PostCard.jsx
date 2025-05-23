import React from "react"

const PostCard = () => {
  return (
    <div
      className="post-card w-[20%] bg-[#2F4A5D] flex flex-col justify-center"
      style={{ height: "calc(20vw + 50px)" }}
    >
      <div className="post-header">Title</div>
      <div className="image w-full bg-black" style={{ aspectRatio: "1 / 1" }}>
        Image
      </div>
      <div className="post-attributes">Attributes</div>
    </div>
  )
}

export default PostCard
