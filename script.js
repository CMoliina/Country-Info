let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v2/name/${countryName}?fullText=true`;
    console.log(finalURL)
    fetch(finalURL).then((response) => response.json()).then((data) => {
        // console.log(data[0]);
        // console.log(data[0].capital);
        // console.log(data[0].flags.svg);
        // console.log(data[0].name);
        // console.log(data[0].region);
        // console.log(data[0].currencies[0].code);
        // console.log(data[0].currencies[0].name);
        // console.log(data[0].languages[0].name,',',data[0].languages[1].name)
        result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img">
            <h2>${data[0].name}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].region}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Demonym:</h4>
                    <span>${data[0].demonym}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${data[0].currencies[0].name} - ${data[0].currencies[0].code}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Language:</h4>
                    <span>${data[0].languages[0].name}</span>
                </div>
            </div>
        `;
    }).catch(() => {
        if(countryName.length == 0){
            result.innerHTML = `<h3>The input field cannot be empty</h3>`
        }
        else {
            result.innerHTML = `<h3>Please enter a valid country name</h3>`;
        }
    })
});