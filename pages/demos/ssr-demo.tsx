import { NextPage } from 'next'

interface Obj {
  name: string
}

interface Props {
  data: Obj
}

const SSRDemo: NextPage<Props> = ({ data }) => {
  return <div>{data.name}</div>
}

export const getServerSideProps = async () => {
  return {
    props: { data: { name: 'imber' } }
  }
}

export default SSRDemo
