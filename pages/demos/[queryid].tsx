import { useRouter } from 'next/router'
// import { useEffect } from 'react'

// params感觉用处不大，【...params】,就是可以使用多层和拿多层的参数
const Query = () => {
  const router = useRouter()
  console.log(
    '------router的动态参数直接取，不要用useEffect去取，本地开发刷新会触发两次，但是打包后只触发一次------',
    router
  )

  // 用了useEffect反而没拿到router的参数
  // useEffect(() => {
  //   console.log('route2r: ', router)
  // }, [])

  return <div>query</div>
}

export default Query
