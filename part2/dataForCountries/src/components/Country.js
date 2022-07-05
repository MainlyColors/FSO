import { useState } from 'react';

import TodaysWeather from './TodaysWeather';

export default function Country({ country, show: showState = false }) {
  const [show, setShow] = useState(showState);

  function handleClick() {
    setShow(!show);
  }

  if (!show) {
    return (
      <p>
        {country.name}
        <button style={{ marginLeft: '5px' }} onClick={handleClick}>
          show
        </button>
      </p>
    );
  }

  if (show) {
    return (
      <>
        <p>
          {country.name}
          <button style={{ marginLeft: '5px' }} onClick={handleClick}>
            show
          </button>
        </p>

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
          {showState ? <TodaysWeather country={country} /> : ''}
        </section>
      </>
    );
  }
}
