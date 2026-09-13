import { useEffect, useState } from 'react'

/**
 * Loads the technology catalogue from /data/technologies.json.
 * Kept as a hook (rather than a hardcoded array) so the data source
 * can change without touching any component.
 */
export default function useTechnologies() {
  const [technologies, setTechnologies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function loadTechnologies() {
      try {
        const response = await fetch('/data/technologies.json')
        if (!response.ok) throw new Error('Could not load technology data.')
        const data = await response.json()
        if (!cancelled) {
          setTechnologies(data)
          setIsLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setIsLoading(false)
        }
      }
    }

    loadTechnologies()
    return () => {
      cancelled = true
    }
  }, [])

  return { technologies, isLoading, error }
}
