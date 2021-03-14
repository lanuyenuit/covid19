import { useState, useEffect } from "react";
import moment from "moment";
import { fetchWorldwideData } from "../../api";
import CountryStatistics from "../CountryStatistics";
import { DATE_FORMAT } from "../../contstants";

const WorldwideStatistics = () => {
  const [data, setData] = useState({ Global: {}, Countries: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSummary = async () => {
      setLoading(true);

      try {
        const data = await fetchWorldwideData();
        setData(data);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  const { Global, Countries, Message } = data;
  const worldWide = { ...Global, Country: "Worldwide" };

  const ErrorMessage = (error) => (
    <p>{`${error.err}. Please reload the page to try again.`}</p>
  );

  return (
    <div className="statistics summary">
      {loading && <p>Loading...</p>}

      {error ? (
        <ErrorMessage err={error} />
      ) : (
        <>
          {data && data.Date && (
            <h3>{moment(data.Date).format(DATE_FORMAT)}</h3>
          )}

          {Message && <p>{Message}</p>}
          {Countries && (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Country</th>
                  <th scope="col">New Cases</th>
                  <th scope="col">Total Cases</th>
                  <th scope="col">New Deaths</th>
                  <th scope="col">Total Deaths</th>
                  <th scope="col">New Recovered</th>
                  <th scope="col">Total Recovered</th>
                </tr>
              </thead>

              <tbody>
                {worldWide && <CountryStatistics country={worldWide} />}
                {Countries.map((country) => {
                  return (
                    <CountryStatistics
                      key={country.CountryCode}
                      country={country}
                    />
                  );
                })}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default WorldwideStatistics;
