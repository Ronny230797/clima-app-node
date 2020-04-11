const axios = require('axios')

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=669992c15e65b74d12804410f21ac42f&units=metric`)
    return resp.data.main.temp

}

module.exports = {
    getClima
}