import Country from './Country';

function CountriesList({ countries, searchStr }) {
  const filterData = countries.filter(({ name }) =>
    name.toLowerCase().includes(searchStr.toLowerCase())
  );

  if (filterData.length >= 10)
    return <p>Too many matches, specify another filter</p>;

  if (filterData.length === 1)
    return <Country country={filterData[0]} show={true} />;

  return filterData.map((country) => (
    <Country key={country.name} country={country} />
  ));
}

export default CountriesList;
