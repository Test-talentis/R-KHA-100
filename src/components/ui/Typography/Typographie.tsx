import React from 'react'

type TTypographie = {
    text: string,
    style?: React.CSSProperties
    propCss?: string
}

function Typographie({text, style, propCss}: TTypographie) {
  return (
    <p className={propCss} style={style}>{text}</p>
  )
}

export default Typographie