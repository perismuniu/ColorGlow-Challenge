import React from "react"
import padsArray from "./pads"

export default function App() {

    const [padsList, setPadsList] = React.useState(padsArray)

    const buttonEl = padsList.map(pad => {
        return (
            <button 
                key={pad.id} 
            >
            </button>
        )
    })
    return (
        <main>
            <div className="pad-container">
                {buttonEl}
            </div>
        </main>
    )
}
