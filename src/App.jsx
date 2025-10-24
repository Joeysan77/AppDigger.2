import { useState } from 'react'
import './App.css'
import './index.css'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Header } from './components/header.jsx'
import { Platform } from './components/platform.jsx'
import { Trendingcat } from './components/trendingcat.jsx'
import { Suggested } from './components/suggested.jsx'
import { Recommended } from './components/recommended.jsx'
import { Interested } from './components/interested.jsx'
import { NavBar } from './components/NavBar'

function App() {
  const [platformtext, setPlatformtext] = useState("Android");
  const [platformi , setPlatformi] = useState("fa-android")
  const [platformbg , setPlatformbg] = useState("green")

  return (
    <>
      <Header 
      platformtext={platformtext} 
      setPlatformtext={setPlatformtext} 
      platformi={platformi}
      setPlatformi = {setPlatformi}
      platformbg = {platformbg}
      setPlatformbg = {setPlatformbg}
      />
      <Platform 
      platformtext={platformtext} 
      setPlatformtext={setPlatformtext}
      platformi = {platformi}
      setPlatformi = {setPlatformi}
      platformbg = {platformbg}
      setPlatformbg = {setPlatformbg}
       />
      <Trendingcat />
      <Suggested />
      <Recommended />
      <Interested />
      <NavBar />
      <SpeedInsights/>
    </>
  )
}

export default App
