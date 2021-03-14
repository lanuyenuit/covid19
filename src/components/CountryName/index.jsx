const CountryName = ({ country: { Country }}) => {
  // const { Country } = country
  return <option value={Country}>{Country}</option>
}

export default CountryName
