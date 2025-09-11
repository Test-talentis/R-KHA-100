import React from 'react'
import styles from "./styles.module.css";

const {backGroundIamge} = styles

type TBackgroundImage = {
  title: string
}

function BackgroundImage({title}:TBackgroundImage) {
  return (
    <div className={backGroundIamge}>#{title}</div>
  )
}

export default BackgroundImage