import styles from './page.module.css'
import Image from 'next/image'
import hawaii from '../../public/hawaii.png'
import seta from '../../public/arrow-right.svg'
import cyprus from '../../public/cyprus.png'
import Bali from '../../public/bali.png'
import { Children } from 'react'

function Botao({x,y}){
 return (
    <button style={{left:x, top:y}} className={styles.botao}>Start</button>
  )
}

function Card({localidade, imagem}){
  return(
    <div className={styles.card}>
      <div className={styles.cabecalhoCard}>
      <p className={styles.localidade}>{localidade}</p>

      <Image src={seta}/>
      </div>
      <Image src= {imagem} className={styles.imagem}/>
    </div>
  )
}

function Cards({children, x, y}){
  return(
    <div style={{left: x, top:y}} className={styles.cards}>
      {children}
    </div>
  )
}

function Social({children, x, y}){
  return(
    <div style={{left: x, top: y}} className={styles.social}>{children}</div>
  )
}

export default function Home() {
  return (
    <>
    <Botao x={135} y={601.72}/>
    <Cards x={135} y={801}>
      <Card localidade="Hawaii" imagem={hawaii}/>
      <Card localidade="Cyprus" imagem={cyprus}/>
      <Card localidade="Bali" imagem={Bali}/>
    </Cards>
    </>
  )
}
