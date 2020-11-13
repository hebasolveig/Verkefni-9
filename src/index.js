import {
  el,
  element,
  formatDate
} from "./lib/utils";
import {
  fetchEarthquakes
} from "./lib/earthquakes";
import {
  createPopup,
  init
} from "./lib/map"

document.addEventListener("DOMContentLoaded", async () => {

  // Init map
  init();

  // Get earthquake data
  const response = fetchEarthquakes();
  response.then((data) => {

    console.log(data)

    // Get .earthquakes element
    const earthquakes = document.querySelector(".earthquakes");
    const features = data.features;

    // Loop through each feature
    features.forEach(function (feature) {

      const {
        place,
        time,
        mag,
        detail
      } = feature.properties;

      const content = el('div',
        place ? el('p', place) : null,
        time ? el('p', formatDate(time)) : null,
      )

      createPopup(feature, content);

      const listItem =
        el('li',
          el('div',
            place ? el('h2', place) : null,
            el('dl',
              time ? el('dt', 'Tími') : null,
              time ? el('dd', formatDate(time)) : null,
              mag ? el('dt', 'Styrkur') : null,
              mag ? el('dd', mag.toString()) : null,
            ),
            element(
              'button', {
                'class': 'button'
              }, {
                click: () => {

                }
              },
              'Sjá nánar'
            ),
            detail ? el('a', detail) : null
          ),
        );

      earthquakes.appendChild(listItem);

    })

  }).catch((error) => {
    console.log(error);
  })

});