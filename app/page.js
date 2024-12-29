import  Hero from '@/component/Home/Hero'
import About from '@/component/Home/AboutSection'
import GetInTouch from '@/component/Home/Contact'
import ServicesSection from '@/component/Home/AdvContent'
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <GetInTouch />
      <ServicesSection />
    </div>
  )
}