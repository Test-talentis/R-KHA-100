import React from 'react'

type TList = {
    title: string
    icon?: React.ReactNode
}

function List({title, icon}: TList) {
  return (
    <li>
      {icon && <span>{icon}</span>}
      {title}
    </li>
  )
}

export default List