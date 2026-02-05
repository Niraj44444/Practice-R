import './App.css'
import Buttons from './Buttons.jsx'
import Profiles from './Profiles.jsx'
import Lists from './Lists.jsx'

export default function App() {
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit!
      <br />
      {/* This renders the Button component from the other file */}
      <Buttons /> 
      <br />
      <Profiles />
      <Lists />
    </main>
  )
}