import { DateTime } from "luxon";

const API_KEY = 'ada36e802058141cc84ce05b1422e9be';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})
    return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed}
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        'weather',
        searchParams
        ).then(formatCurrentWeather)

    return formattedCurrentWeather
}

const formatToLocalTime = (
    secs, 
    zone, 
    format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a"
    ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

export default getFormattedWeatherData
export {formatToLocalTime}