import React from 'react'
import NavBar from './components/NavBar'
import MainSection from './components/MainSection'

export default function page() {
  return (
    <div className="min-h-screen bg-[#2e3440]">
      <div className="max-w-7xl mx-auto">
        <NavBar />
        <MainSection />
      </div>
    </div>
  )
}
