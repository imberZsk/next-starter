import { NextPage } from 'next'

interface Obj {
  name: string
}

interface Props {
  data: Obj
}

const Demo1: NextPage<Props> = ({ data }) => {
  return <div>{data.name}</div>
}

export const getServerSideProps = async () => {
  return {
    props: { data: { name: 'imber' } }
  }
}

export default Demo1
