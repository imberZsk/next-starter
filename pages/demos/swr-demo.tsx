import { GetServerSideProps } from 'next'

const swr = () => {
  return <div>Enter</div>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}

export default swr
