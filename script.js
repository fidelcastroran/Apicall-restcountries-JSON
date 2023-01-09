const searchBtn = document.querySelector(".search-btn")
const inputBar = document.querySelector(".input-bar")
const result = document.querySelector(".result")

searchBtn.addEventListener("click", () => {
    fetch((`https://restcountries.com/v2/name/${inputBar.value}`))
        .then((res) => res.json())
        .then((data) => displayCountries(data))
});

const displayCountries = (data) => {
    result.innerHTML = "";
    data.forEach((country) => {
        const div = document.createElement('div')
        div.className = "card m-5 shadow"
        div.style.width = "18rem";
        div.innerHTML = `
            <img src="${country.flag}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-text">${country.name}</h2>
                </div>
            `;
        result.appendChild(div);
    });
}