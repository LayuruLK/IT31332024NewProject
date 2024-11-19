import { useState } from "react"

export default function() {
    const [fontSize, setFontSize] = useState('16px')
    return(
        <>
            <button onClick={()=>setFontSize('8px')}>S</button>
            <button onClick={()=>setFontSize('16px')}>S</button>
            <button onClick={()=>setFontSize('24px')}>S</button>
        </>
    )
}