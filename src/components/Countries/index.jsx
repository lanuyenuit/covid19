import { useState, useEffect } from 'react'
import CountryName from '../CountryName'
import { fetchCountries } from '../../api'

const CountryStatistics = ({ handleSelect }) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const data = await fetchCountries()
        setCountries(data)
      } catch (error) {
        console.error(error)
        alert(error)
      }
    }

    fetchCountriesData()
  }, [])

  return (
    <div className="my-3">
      <select onChange={handleSelect} className="form-control m-auto w-50">
      {countries.map((country) => (
        <CountryName
          key={country.ISO2}
          country={country}
          handleSelect={handleSelect}
        />
      ))}
      )
    </select>
    </div>
  )
}

export default CountryStatistics
