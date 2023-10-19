import styles from './page.module.css'

function Botao({x,y}){
 return (
    <button style={{left:x, top:y}} className={styles.botao}>Start</button>
  )
}

export default function Home() {
  return (
    <Botao x={135} y={601.72}/>
  )
}
