const row = document.querySelector('.row')


axios("https://restcountries.com/v3.1/all")
    .then(({data}) => {
        // console.log(data)
        data.map(item => {
            row.innerHTML += `
            <div class="col-4">
            <img src="${item.flags.png}" width="200px">
            <h4>Name of the country:${item.name.official}</h4>
            <h4>Capital city of the counry:${item.capital}</h4>
            <h4>Language: ${Object.keys(item.languages)[0].toUpperCase()}</h4>
            <h4>Currency: ${Object.keys(item.currencies)[0]}</h4>
            </div>`
        })
    })
