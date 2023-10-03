import './globals.css'
import styles from './styles.module.css'
//import {Quicksand} from 'next/font/google'

export const metadata = {
  title: 'Travel Landing Page',
}

/*const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap'
})*/

function Logo({x, y}){
   return(
    <p style={{left: x, top: y}}className={styles.logo}>Ready<span className={styles.comercial}>&</span>Go</p>

   );
}
function Menu({children, x, y}){
  return(
<ul style= {{left: x, top:y}} className={styles.menu}>
  {children.map((ItemMenu) =>(
    <li key={ItemMenu.nome}>{ItemMenu}</li>
  ))}
  </ul>
  );
} 



function ItemMenu({nome}){
  return(
    <p className={styles.ItemMenu}>{nome}</p>
  );
}

function Maior({textin, x, y}){
  return(
    <p style= {{left: x, top:y}} className={styles.textoMaior}>{textin}</p>
  );
}

function Menor({textan, x, y}){
  return(
    <p style= {{left:x, top: y}} className={styles.textoMenor}>{textan}</p>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo x={135} y={53} ativo={{nome: 'fulano', idade:'25', aluno:''}}/>  
          <Menu x={435} y={60}>
            <ItemMenu nome="Home"/>
            <ItemMenu nome="About"/>
            <ItemMenu nome="Contact"/>
            <ItemMenu nome="Blog"/>
            <ItemMenu nome="Videos"/>
            <ItemMenu nome="+38(097)8849989"/>
          </Menu>
        </header>
          <main>
          <Maior  x={135} y={238} textin="Your perfect honeymoon"/>
          <Menor x={136} y={465.04} textan="Mayami is more than a honeymoon destination –
          it’s a perfect romantic spot for couples
           who like  spending time in beach. "/>
          {children}
          </main>
        </body>
        
    </html>
  )
}
