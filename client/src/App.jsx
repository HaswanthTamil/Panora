import { useState } from "react"
import "./styles/App.css"
import Home from "./pages/Home.jsx"
import CreatePost from "./pages/CreatePost.jsx"
import Post from "./pages/Post.jsx"
import NotFound from "./pages/NotFound.jsx"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />\
      </Routes>
    </>
  )
}

export default App
