// params感觉用处不大，【...params】,就是可以使用多层和拿多层的参数
import { useRouter } from 'next/router'
// import { useEffect } from 'react'

const RouterDemo = () => {
  const router = useRouter()
  // '------router的动态参数直接取，不要用useEffect去取，本地开发刷新会触发两次，但是打包后只触发一次，还可以通过router去修改请求头------'

  // 用了useEffect反而没拿到router的参数
  // useEffect(() => {
  //   console.log('route2r: ', router)
  // }, [])

  return <div>RouterDemo useRouter:{router.query.queryid}</div>
}

export default RouterDemo
