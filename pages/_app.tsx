import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import '@/styles/apply.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  // 如果一些页面不需要套layout，可以在组件上挂属性（因为组件也是一个对象），还可以通过getStaticPath传参数
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
