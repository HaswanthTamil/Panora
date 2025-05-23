import { useState } from "react"
import "./styles/App.css"
import Home from "./pages/Home.jsx"
import CreatePost from "./pages/NewPost.jsx"
import Post from "./pages/Post.jsx"
import NotFound from "./pages/NotFound.jsx"
import { Routes, Route } from "react-router-dom"
import NewPost from "./pages/NewPost.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />\
      </Routes>
    </>
  )
}

export default App
