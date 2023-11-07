import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Container from 'postcss/lib/container'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import Section from './components/Section'
import ProjectSection from './components/ProjectSection'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#121212] px-4">
      <Navbar/>
        <HeroSection/>
        <Section/>
        <AboutSection/>
        <Section/>
        <ProjectSection/>
        <Section/>
        

        
      
    </main>
  )
}
