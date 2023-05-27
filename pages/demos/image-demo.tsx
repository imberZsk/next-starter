import { GetServerSideProps } from 'next'

const image = () => {
  return <div>Enter</div>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}

export default image
