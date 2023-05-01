import { NextPage } from 'next'
import Head from 'next/head'

interface Obj {
  name: string
}

interface Props {
  data: Obj
}

const Demo1: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>自定义title</title>
      </Head>
      {data.name}
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: { data: { name: 'imber' } }
  }
}

export default Demo1
