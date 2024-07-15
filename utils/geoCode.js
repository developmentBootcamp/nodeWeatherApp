const request = require("postman-request");
const chalk = require("chalk");


const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWxpaGFzc2FuenVsZmlxYXIiLCJhIjoiY2t4c3Vib2QxMHNkbDJwcGNjbjZ0bHhhcyJ9.m9ENgdDV0bziou7GuMXSYA`;
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback(chalk.red.inverse('Unable to connect to location services!'), undefined)
        } else if (response.body.features.length === 0){
            callback(chalk.red.inverse('Could not find the address!'), undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
};


module.exports = geoCode
