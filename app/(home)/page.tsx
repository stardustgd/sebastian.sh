import React from 'react'
import Socials from './components/Socials'
import MainSection from './components/MainSection'

export default function page() {
  return (
    <div className="min-h-screen bg-[#2e3440]">
      <div className="max-w-7xl mx-auto">
        <Socials />
        <MainSection />
      </div>
    </div>
  )
}
