import React from "react"
import Card from "./components/Card"
import CreateBlog from "./pages/Blog/CreateBlog"
export default function App() {
  const tools = ["Html", "Css", "Javascript"]

  return (
    
    <main>
    {/* <Card title="Design Portfolio" tools={tools}/> */}
    <CreateBlog/>
    </main>
  )
}

