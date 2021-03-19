if (document.getElementById("preston")) {
    tname = "Preston"
} else if (document.getElementById("sodasprings")) {
    tname = "Soda Springs"
} else if (document.getElementById("fishhaven")) {
    tname = "Fish Haven"
}

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();

    })

    .then(function (jsonObject) {

        const towns = jsonObject['towns'];

        towns.forEach(sitetown => {
            test_name = `${sitetown.name}`
                if  (tname == test_name) {
                
                const townname = document.createElement("h2");

                const events_data = document.createElement("section");
                const events = document.querySelector(".events");
                const event1 = document.createElement("p");
                const event2 = document.createElement("p");
                const event3 = document.createElement("p");
                townname.innerHTML = `${sitetown.name}` + " Events";
               
                event1.innerHTML = `${sitetown.events[0]}`;
                event2.innerHTML = `${sitetown.events[1]}`;
                event3.innerHTML = `${sitetown.events[2]}`;
                

                events_data.append(townname);

                events_data.append(event1);
                events_data.append(event2);
                events_data.append(event3);
                console.log(events_data)
                events.append(events_data);
            }

        })

    });