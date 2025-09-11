import React from 'react'
import styles from "./styles.module.css"

const {castumlink} = styles

type TCastumlink<T> = {
    data: T[];
    renderData: (data: T) => React.ReactNode;
}

function Castumlink<T>({data, renderData}: TCastumlink<T>) {

    const displayData = data.map(item => renderData(item))

  return (
    <div className={castumlink}>{displayData}</div>
  )
}

export default Castumlink