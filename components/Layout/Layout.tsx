import type { NextPage } from 'next'
import { ReactNode } from 'react'
import { Header } from '../header'

interface Props {
  children: ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
