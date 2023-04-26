import { GetServerSideProps } from 'next'

const optimize = () => {
  return <div>Enter</div>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}

export default optimize
