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

function Logo(){
   return(
    <p className={styles.logo}>Ready<span className={styles.comercial}>&</span>Go</p>

   );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo/>
          <main>
          {children}
          </main>
        </header>
        </body>
    </html>
  )
}
