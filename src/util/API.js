
async function Search(country) {
    const url = `https://disease.sh/v3/covid-19/countries/${country}?yesterday=true&strict=true&allowNull=true`;
    const response = await fetch(url);
    const data = await response.json();
    return data;   
}

export default Search;