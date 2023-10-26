import './globals.css'
import styles from './styles.module.css'
//import {Quicksand} from 'next/font/google'
import Image from 'next/image';
import facebook from '../../public/facebook.svg';
import twitter from '../../public/twitter.svg';
import link from '../../public/link.png';
import palmeira from '../../public/Palms.png';
import nuvem1 from '../../public/nuvem1.svg';
import nuvem2 from '../../public/nuvem2.png';
import circulo from '../../public/Ellipse 1.svg';

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

function RedesSociais({x, y}){
  return(
    <div style={{left: x, top: y}} className={styles.redesSociais}>
      <Image src={facebook}/>
      <Image src={twitter}/>
      <Image src={link}/> 
    </div>
  )
}

function Palmeira({x, y}){
  return(
    <div style={{left: x, top: y}} className={styles.palmeira}>
      <Image src={palmeira}/>
      </div>
  )
}

function Nuvem1({x,y}){
  return(
    <div style={{left: x, top: y}} className={styles.nuvens}>
      <Image src={nuvem1}/>
    </div>
  )
}

function Nuvem2({x,y}){
  return(
    <div style={{left: x, top: y}} className={styles.nuvens}>
      <Image src={nuvem2}/>
    </div>
  )
}

function Circulo({x,y}){
  return(
    <div style={{left: x, top: y}} className={styles.circulo}>
      <Image src={circulo}/>
    </div>
  )
}

function ItemMenu({nome}){
  return(
    <p className={styles.ItemMenu}>{nome}</p>
  );
}


function NumeroTelefone({x, y, numero}){
  return(
    <div style={{left:x, top:y}} className={styles.celular}>
         <Image className={styles.iconeNumero} width={19} height={19} src="/phone.png" alt='imdbffmn'/>
      <p className= {styles.numero}>{numero}</p>
    </div>
  );
}


function CaixaTitulo({textin, textan, x, y}){
  return(
    <div style= {{left: x, top:y}} className={styles.caixaTitulo}>
      <p className={styles.textoMaior}>{textin}</p>

      <p className={styles.textoMenor}>{textan}</p>
    </div>
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
          </Menu>
          <NumeroTelefone x={1102} y={63} numero="+38(097)8849989"/>
          {/* <ItemMenuIcone/> */}
        </header>
          <main>
          <CaixaTitulo x={135} y={238} textin={"Your perfect honeymoon"}
          textan={"Mayami is more than a honeymoon destination – it’s a perfect romantic spot for couples who like  spending time in beach. "}/>
          {children}
          </main>
          <footer>
          <RedesSociais x={1175} y={843}/>
            <Circulo x={1175} y={155}/>
            <Nuvem1 x={568} y={600}/>
            <Nuvem2 x={638} y={155}/>
            <Palmeira x={638} y={155}/>
          </footer>
        </body>
        
    </html>
  )
}
