const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();

    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        towns.forEach(sitetown => {
            const card = document.createElement("section");
            const data = document.createElement("section")
            const timage = document.createElement("figure")
            const townname = document.createElement("h2");
            const townmotto = document.createElement("p");
            const townyearfounded = document.createElement("p");
            const towncurrentpopulation = document.createElement("p");
            const townavgrainfall = document.createElement("p");
            const image = document.createElement("img");
            const cards = document.querySelector(".cards");
            
            if (`${sitetown.name}` == 'Fish Haven' || `${sitetown.name}` == 'Preston' || `${sitetown.name}` == 'Soda Springs') {
                townname.innerHTML = `${sitetown.name}`;
                townmotto.innerHTML = `${sitetown.motto}`;
                townyearfounded.innerHTML = "Year Founded: " + `${sitetown.yearFounded}`;
                towncurrentpopulation.innerHTML = "Current Population: " + `${sitetown.currentPopulation}`;
                townavgrainfall.innerHTML = "Average Rain Fall: " + `${sitetown.averageRainfall}`;
                image.setAttribute('src', 'images/' + `${sitetown.photo}`);
                image.setAttribute("alt", `${sitetown.name}` + ' Beauty')
                timage.append(image);

               

                data.append(townname);
                data.append(townmotto);
                data.append(townyearfounded);
                data.append(towncurrentpopulation);
                data.append(townavgrainfall);
                card.append(data);
                card.append(timage)
                cards.append(card);

               
            }
        })

    });

    