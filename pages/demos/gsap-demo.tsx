import { requestProduct } from '@/services/api'
import { ProductData } from '@/services/api/type'
import { NextPage } from 'next'

interface Props {
  data: ProductData
}

const Demo1: NextPage<Props> = ({ data }) => {
  return (
    <div>
      {data.products.map((item, index) => {
        return <div key={index}>{item.title}</div>
      })}
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await requestProduct()
  return {
    props: { data }
  }
}

export default Demo1
