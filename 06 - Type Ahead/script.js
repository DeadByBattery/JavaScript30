const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetch(endpoint)
  .then((resp) => resp.json())
  .then((data) => cities.push(...data));

function searchMatches(word_to_match, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(word_to_match, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const filtered_cities = searchMatches(this.value, cities);
  if (this.value) {
    const output = filtered_cities
      .map((place) => {
        const regex = new RegExp(this.value, "gi");
        const hl_city = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const hl_state = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
          <span class="name">${hl_city}, ${hl_state}</span>
          <span class="population">
            ${Number(place.population).toLocaleString()}
          </span>
        </li>
      `;
      })
      .join("");
    suggestions.innerHTML = output;
  } else {
    suggestions.innerHTML = `
      <li>Filter for a city</li>
      <li>or a state</li>
    `;
  }
}

const searchbox = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchbox.addEventListener("input", displayMatches);
