import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import cn from 'classnames'
import logo from '../../public/logo.png'
import { NavBar } from './components/GlobalNavBar'
import { State } from './state'
import 'normalize.css'
import './globals.css'
import style from './layout.module.scss'

export const metadata = {
  title: 'Сбербанкиада 2023',
  description: '',
}

const roboto = Roboto({
  weight: ['400', '300'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={cn(style.page, roboto.className)}>
        <i className={style.back} />
        <State>
          <header className={style.head}>
            <Link href="/">
              <Image src={logo} alt="logo" width={197} height={158} />
            </Link>
          </header>
          {children}
          <NavBar />
        </State>
      </body>
    </html>
  )
}
