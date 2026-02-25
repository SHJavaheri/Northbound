import { Hero } from './components/Hero'
import { WhatIsNorthbound } from './components/WhatIsNorthbound'
import { Principles } from './components/Principles'
import { Products } from './components/Products'
import { BuildPhilosophy } from './components/BuildPhilosophy'
import { FutureScope } from './components/FutureScope'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Hero />
      <WhatIsNorthbound />
      <Principles />
      <Products />
      <BuildPhilosophy />
      <FutureScope />
      <Contact />
    </div>
  )
}

export default App
