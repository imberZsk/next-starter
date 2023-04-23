import type { NextPage } from 'next'
import Header from '../header'
import { ReactNode } from 'react'

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
