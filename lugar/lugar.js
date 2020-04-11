//Axios trabaja con promesas, mientras request con callbacks, por eso vamos a usar axios
const axios = require('axios')

const getLugarLatLng = async(dir) => {

    //encodedURI es propio de js para convertit lo que pueda ingresar un usuario, eliminando ejemplo espacios blanco san jose === san%20jose
    const encodedUlr = encodeURI(dir)

    //Aqui creamos la peticion o instancia.
    const instance = axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
            headers: { 'x-rapidapi-key': 'd1d826c344msh8215dc2b36527e2p1c5251jsna6d07c035d63' }
        })
        //Aqui ejecutamos la petecion o instancia.
    const resp = await instance.get()
    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontraron resultados para ${ dir }`)
    }

    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}