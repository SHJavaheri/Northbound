import { AmbientAudio } from './components/AmbientAudio'
import { BuildPhilosophy } from './components/BuildPhilosophy'
import { Contact } from './components/Contact'
import { FutureScope } from './components/FutureScope'
import { Hero } from './components/Hero'
import { Principles } from './components/Principles'
import { Products } from './components/Products'
import { VolumeControl } from './components/VolumeControl'
import { WhatIsNorthbound } from './components/WhatIsNorthbound'

function App() {
  return (
    <AmbientAudio>
      <div className="relative w-full overflow-x-hidden">
        <Hero />
        <WhatIsNorthbound />
        <Principles />
        <Products />
        <BuildPhilosophy />
        <FutureScope />
        <Contact />
        <VolumeControl />
      </div>
    </AmbientAudio>
  )
}

export default App
