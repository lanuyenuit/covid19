import moment from 'moment'
import { DATE_FORMAT } from '../../contstants'

const LiveByCountryAndStatus = ({ country }) => {
  const { Date, Country, Confirmed, Deaths, Recovered, Active } = country

  return (
    <div className="py-3">
      <h6>Live By Country And Status:</h6>
      <h3>{Country}</h3>
      <div className="text-info">Total Cases: {Confirmed}</div>
      <div className="text-danger">Deaths: {Deaths}</div>
      <div className="text-success">Recovered: {Recovered}</div>
      <div className="text-warning">Active: {Active}</div>
      <div>Date: {moment(Date).format(DATE_FORMAT)}</div>
    </div>
  )
}

export default LiveByCountryAndStatus
