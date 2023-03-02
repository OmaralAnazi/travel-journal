import React from "react"
import ReactDOM from "react-dom/client"
import data from "../public/data.js"
import "./style.css"
import Navbar from "./components/Navbar.jsx"
import Travel from "./components/Travel.jsx"

function App() {
  const travelElements = data.map(element => <Travel key={element.id} {...element}/>)

  return (
    <div>
      <Navbar />
      {travelElements}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)