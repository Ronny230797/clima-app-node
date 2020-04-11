//Optimizar el codigo despues como separar la parte de configuracion de yargs, etccc...

const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

//De momento en yargs estamos usando .options es como hacer la configuracion directa en la variable
const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv

//Esta funciona regra una promesa desde lugar.js y aqui es donde la manejo con el then y el catch
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)

// clima.getClima(40.75000, -74.000000)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {
    try {
        const lgar = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(lgar.lat, lgar.lng)
        return `El clima de ${lgar.direccion} es de una tempertura de ${temp}`
    } catch (e) {
        return `El clima del lugar ${direccion} no se pudo determinar`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)