import React from "react"

export default function Pad(props) {
    const [padOn, setPadOn] = React.useState(props.on)

    function toggle() {
        setPadOn(prevOn => !prevOn)
    }
    
    return(
        <button 
            style={{backgroundColor: props.color}}
            className={padOn ? "on" : "off"}
            onClick={toggle}
        >
        </button>
    )
}