import { useState, useEffect } from 'react'
import Countries from '../Countries'
import LiveByCountryAndStatus from '../LiveByCountryAndStatus'
import { fetchLiveByCountry } from '../../api'

const SearchByCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState()
  const [liveByCountry, setLiveByCountry] = useState()

  useEffect(() => {
    const fetchLiveDataByCountry = async () => {
      try {
        const response = await fetchLiveByCountry(selectedCountry)

        if (response instanceof Array) {
          setLiveByCountry(response[0])
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchLiveDataByCountry()
  }, [selectedCountry])

  const handleSelect = (e) => {
    setSelectedCountry(e.currentTarget.value)
  }

  return (
    <>
      <Countries handleSelect={handleSelect} />
      {liveByCountry && <LiveByCountryAndStatus country={liveByCountry} />}
    </>
  )
}

export default SearchByCountry
