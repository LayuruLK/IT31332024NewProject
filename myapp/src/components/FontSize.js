export default function({setFontSize}) {
    return(
        <>
            Font Size: 
            <button onClick={()=>setFontSize('8px')}>S</button>
            <button onClick={()=>setFontSize('16px')}>M</button>
            <button onClick={()=>setFontSize('24px')}>L</button>
        </>
    )
}