import React from 'react'

type TInput = {
    type : string,
    placeHolder: string
    style?: React.CSSProperties
}

function Input({type, placeHolder, style}: TInput) {
  return (
    <input type={type} placeholder={placeHolder} style={style} />
  )
}

export default Input