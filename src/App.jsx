import './App.css'
import Buttons from './Buttons.jsx'
import Profiles from './Profiles.jsx'
import Lists from './Lists.jsx'
import Dcount from './Dcount.jsx'
import Scounts from './Scounts.jsx'
import Alertbutton from './Alertbutton.jsx'

export default function App() {
  return (
    <main>
      Hello world
      <br />
      {/* This renders the Button component from the other file */}
      <Buttons /> 
      <br />
      <Profiles />
      <Lists />
      <Dcount />
      <Scounts />
      <Alertbutton />
    </main>
  )
}