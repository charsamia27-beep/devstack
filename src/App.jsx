import { useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologyGrid from './components/TechnologyGrid'
import YourStack from './components/YourStack'
import Footer from './components/Footer'
import useTechnologies from './hooks/useTechnologies'

export default function App() {
  const { technologies, isLoading, error } = useTechnologies()
  const [stack, setStack] = useState([])

  // A Set of ids in the stack, recomputed only when the stack changes —
  // lets each card look up "am I selected?" in O(1) instead of scanning the array.
  const stackIds = useMemo(() => new Set(stack.map((item) => item.id)), [stack])

  function handleAdd(technology) {
    if (stackIds.has(technology.id)) {
      toast.warn(`${technology.name} is already in your stack.`)
      return
    }
    setStack((current) => [...current, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  function handleRemove(id) {
    const removed = stack.find((item) => item.id === id)
    setStack((current) => current.filter((item) => item.id !== id))
    if (removed) toast.info(`${removed.name} removed from your stack.`)
  }

  function handleRemoveAll() {
    if (stack.length === 0) return
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <TechnologyGrid
            technologies={technologies}
            isLoading={isLoading}
            error={error}
            stackIds={stackIds}
            onAdd={handleAdd}
          />
          <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
        </div>
      </section>

      <Footer />

      <ToastContainer position="top-right" autoClose={2500} newestOnTop pauseOnHover />
    </div>
  )
}
