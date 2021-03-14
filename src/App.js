import './App.css'
import { useState, useEffect } from 'react'
import { WorldwideStatistics, SearchByCountry } from './components'
import { SHOW_SUMMARY, HIDE_SUMMARY } from './contstants'

function App() {
  const [showSummary, setShowSummary] = useState(true)
  const [toggleSummaryText, setToggleSummaryText] = useState(SHOW_SUMMARY)

  useEffect(() => {
    setToggleSummaryText(showSummary ? HIDE_SUMMARY : SHOW_SUMMARY)
  }, [showSummary])

  const toggleSummary = (e) => {
    e.preventDefault()
    setShowSummary(!showSummary)
  }

  return (
    <div className='App'>
      <h1>COVID19 Information</h1>
      <SearchByCountry />
      <hr />
      <button className="btn btn-primary m-3" onClick={toggleSummary}>{toggleSummaryText}</button>
      {showSummary && <WorldwideStatistics />}
    </div>
  )
}

export default App
