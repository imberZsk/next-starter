import { useTest } from '@/hooks'

export default function Home() {
  let b = useTest()
  return (
    <main className="flex min-h-screen flex-col items-center  justify-between p-24">
      <div>{b}</div>
    </main>
  )
}
