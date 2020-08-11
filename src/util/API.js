
async function Search(term, selection) {
    if(selection === 'country') {
        const url = `https://disease.sh/v3/covid-19/countries/${term}?yesterday=true&strict=true&allowNull=true`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } else {
        const url = `https://disease.sh/v3/covid-19/continents/${term}?yesterday=true&strict=true&allowNull=true`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}

export default Search;