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
    <tr>
      <td>{Country}</td>
      <td>{NewConfirmed}</td>
      <td>{TotalConfirmed}</td>
      <td>{NewDeaths}</td>
      <td>{TotalDeaths}</td>
      <td>{NewRecovered}</td>
      <td>{TotalRecovered}</td>
    </tr>
  )
}

export default CountryStatistics
