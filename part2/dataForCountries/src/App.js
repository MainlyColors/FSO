import { useState, useEffect } from 'react';

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

  // bad function - side effects
  function renderCountries(arr, searchStr) {
    const filterData = arr.filter(({ name }) =>
      name.toLowerCase().includes(searchStr.toLowerCase())
    );

    if (filterData.length >= 10)
      return <p>Too many matches, specify another filter</p>;
    if (filterData.length === 1) {
      const [country] = filterData;
      return (
        <section>
          <h2>{country.name}</h2>
          <p>capital: {country.capital}</p>
          <p>area: {country.area}</p>
          <h3>languages</h3>
          <ul>
            {country.languages.map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt={`${country.name} flag`} />
        </section>
      );
    }

    return filterData.map(({ name }) => <p key={name}>{name}</p>);
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
      {countrySearch === '' ? '' : renderCountries(countryData, countrySearch)}
    </>
  );
}

export default App;
