import { useState, useEffect } from 'react';

import CountriesList from './components/CountriesList';

function App() {
  const [countrySearch, setCountrySearch] = useState('');
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    console.log('effect ran');
    fetch('https://restcountries.com/v2/all')
      .then((stream) => stream.json())
      .then((data) => {
        // console.log(data);
        setCountryData(data);
      });
  }, []);

  function handleOnChange(e) {
    setCountrySearch(e.target.value);
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="country">find countries</label>
        <input
          style={{
            marginLeft: '8px',
          }}
          type="text"
          id="country"
          value={countrySearch}
          onChange={handleOnChange}
        />
      </form>
      {countrySearch === '' ? (
        ''
      ) : (
        <CountriesList countries={countryData} searchStr={countrySearch} />
      )}
    </>
  );
}

export default App;
