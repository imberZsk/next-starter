import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const handleEntry = () => {
    router.push('/demos/1')
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div onClick={handleEntry}>入口页</div>
      {/* 只有用Link组件才能预加载，上面的编程式导航不能 */}
      <Link href="/demos/1">路由</Link>
    </div>
  )
}
