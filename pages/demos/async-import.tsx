// nspage
import { useEffect } from 'react'
import gsap from 'gsap'

const AsyncImport = () => {
  useEffect(() => {
    const init = async () => {
      const ScrollTrigger = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
    }
    init()
  }, [])
  return <div>AsyncImport demo 如gsap ScrollTrigger</div>
}

export default AsyncImport
