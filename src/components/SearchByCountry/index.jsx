import { useState, useEffect } from "react";
import Countries from "../Countries";
import LiveByCountryAndStatus from "../LiveByCountryAndStatus";
import { fetchLiveByCountry } from "../../api";

const SearchByCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState();
  const [liveByCountry, setLiveByCountry] = useState();
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    if (!selectedCountry) return;

    setLiveByCountry();
    
    const fetchLiveDataByCountry = async () => {
      try {
        const response = await fetchLiveByCountry(selectedCountry);

        if (response instanceof Array && response.length) {
          setLiveByCountry(response[0]);
        } else {
          setNoDataFound(true);
        }
      } catch (err) {
        setNoDataFound(true);
        console.error(err);
      }
    };

    fetchLiveDataByCountry();
  }, [selectedCountry]);

  const handleSelect = (e) => {
    setSelectedCountry(e.currentTarget.value);
  };

  return (
    <>
      <Countries handleSelect={handleSelect} />
      {liveByCountry && <LiveByCountryAndStatus country={liveByCountry} />}
      {noDataFound && <p>No data found</p>}
    </>
  );
};

export default SearchByCountry;
