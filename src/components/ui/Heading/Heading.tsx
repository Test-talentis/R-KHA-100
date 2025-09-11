import React from 'react'

type THeading = {
    title: string,
    level: number
}

function Heading({title, level}: THeading) {
  const Tag = `h${level}`
    return (
        React.createElement(Tag, {}, title)  
    )
}



export default Heading