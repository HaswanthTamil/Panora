import React from "react"
import Header from "../components/Header"
import Content from "../components/Content"

const Home = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,_#0D1117_35%,_#172633_100%)] h-screen flex flex-col w-screen">
      <Header />
      <Content />
    </div>
  )
}

export default Home
