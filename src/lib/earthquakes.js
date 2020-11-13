/*
 * Sækja gögn frá
 */

/**
 * sér í lagi, alla jarðskjálfta 4,5+ seinustu 7 daga:
 * https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson
 *
 * Ath, í verkefni er afrit af gögnum í `./4.5_week.geojson`, gott
 * að nota það á meðan þróun stendur en skipta svo út.
 */

// const URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';
const URL = "./4.5_week.geojson";

export async function fetchEarthquakes() {
  // TODO Sækja gögn frá URL, setja upp villumeðhöndlun og skil

  let result;
  try {
    result = await fetch(URL);
  } catch (e) {
    console.error("Error", e);
    return null;
  }
  if (result.ok) {
    return result.json();
  }
  return null;
}