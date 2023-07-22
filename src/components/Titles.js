import React from 'react'
import styles from "../styles/titles.module.css";

const titles = ["Cricket","Comedy","Sports","Coding","Esports"]
function Titles() {
  return (
    <div className={styles.titles}>
        <i class="fa fa-angle-left"></i>
        <span>
            All
        </span>
       {titles.map((title,index)=>(<span>{title}</span>))}
       {titles.map((title,index)=>(<span>{title}</span>))}
       {titles.map((title,index)=>(<span>{title}</span>))}
       {titles.map((title,index)=>(<span>{title}</span>))}
       {titles.map((title,index)=>(<span>{title}</span>))}
       {titles.map((title,index)=>(<span>{title}</span>))}
       {titles.map((title,index)=>(<span>{title}</span>))}
       {titles.map((title,index)=>(<span>{title}</span>))}
        <i class="fa fa-angle-right"></i>
    </div>
  )
}

export default Titles