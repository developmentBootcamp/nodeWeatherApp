const geoCode = require('./utils/geoCode')
const foreCast = require('./utils/foreCast')

const address = process.argv[2]

if(!address){
    console.log('Invalid Address')
} else{
    geoCode(address, (error, geoData) => {
        if(error){
            return console.log(error);
        }
        foreCast(geoData.latitude, geoData.longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(geoData.location)
            console.log(forecastData)
        })
    })
}


