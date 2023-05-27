import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

interface Obj {
  name: string
}

interface Props {
  data: Obj
}

const ISRDemo: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>自定义title</title>
      </Head>
      {data.name}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log(ctx)
  return {
    props: { data: { name: 'imber' } }
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: false
  }
}

export default ISRDemo
