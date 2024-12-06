import React from "react"
import padsArray from "./pads"
import Pad from "./Pad"

export default function App(props) {

    const [padsList, setPadsList] = React.useState(padsArray)

    const buttonEl = padsList.map(pad => {
        return (
            <Pad 
                key={pad.id}
                color={pad.color}
                on={pad.on}
            />
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
