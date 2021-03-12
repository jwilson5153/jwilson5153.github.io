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
                townyearfounded.innerHTML = "Year Founded: " +  `${sitetown.yearFounded}`;
                towncurrentpopulation.innerHTML = "Current Population: " +  `${sitetown.currentPopulation}`;
                townavgrainfall.innerHTML = "Average Rain Fall: " +  `${sitetown.averageRainfall}`;
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

                //console.table(jsonObject); // temporary checking for valid response and data parsing
                /* 
        const cards = document.querySelector(".cards");
        const data = document.querySelector(".data"); 
        const timage = document.querySelector(".timage"); 
      
        towns.forEach(sitetown => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let h5 = document.createElement('h5');
            let h6 = document.createElement('h6');
            let image = document.createElement('img');
            let alt = document.createElement('alt');
           if (`${sitetown.name}` == 'Fish Haven' || `${sitetown.name}` == 'Preston' || `${sitetown.name}` == 'Soda Springs') {
            // const townsfilter = sitetown.filter(x => (sitetown.name == "Fish Haven" || sitetown.name == "Preston" || sitetown.name == "Soda Springs"));
                h2.innerHTML = `${sitetown.name}`;
                cards.append2(h2);
                h3.innerHTML = `${sitetown.motto}`;
                cards.append(h3);
                h4.innerHTML = "Year Founded: " + `${sitetown.yearFounded}`;
                cards.append(h4);
                h5.innerHTML = "Current Population: " + `${sitetown.currentPopulation}`;
                cards.append(h5);
                h6.innerHTML = "Average Rain Fall: " + `${sitetown.averageRainfall}`;
                cards.append(h6);
                image.setAttribute('src', 'images/' + `${sitetown.photo}`);
                cards.append(image);
                image.setAttribute('alt', `${sitetown.name}` + ' Beauty');
                cards.append(image);
              
                cards.append(card);

            */
           }
        })

            });