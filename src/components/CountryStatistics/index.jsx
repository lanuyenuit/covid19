const CountryStatistics = ({ country }) => {
  const {
    Country,
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  } = country

  return (
    <div>
      <h2>{Country}</h2>
      <div>New Cases: {NewConfirmed}</div>
      <div>Total Cases: {TotalConfirmed}</div>
      <div>New Deatths: {NewDeaths}</div>
      <div>Total Deatths: {TotalDeaths}</div>
      <div>New Recovered: {NewRecovered}</div>
      <div>Total Recovered: {TotalRecovered}</div>
    </div>
  )
}

export default CountryStatistics
