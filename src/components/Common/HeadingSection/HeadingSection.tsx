import { memo } from "react";
import styles from "./style.module.css";


const {title_section} = styles;

const  HeadingSection = memo(({title}: {title: string}) => {
  console.log("render heading")
  return (
    <div className={title_section}>{title}</div>
  )
})

export default HeadingSection