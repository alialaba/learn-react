import React from "react"
import Card from "./components/Card"
export default function App() {
  const tools = ["Html", "Css", "Javascript"]

  return (
    
    <main>
    <Card title="Design Portfolio" tools={tools}/>
    </main>
  )
}

