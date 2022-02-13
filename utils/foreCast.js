const request = require("postman-request");
const chalk = require("chalk");

const foreCast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=7e049734f87f33733ce95676670de0d0&query=${latitude},${longitude}`;
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback(chalk.red.inverse('Unable to connect to location services!'), undefined)
        } else if (response.body.current.length === 0){
            callback(chalk.red.inverse('Could not find the address!'), undefined)
        } else {
            callback(undefined, `It is currently ${response.body.current.temperature} degress out. There is a ${response.body.current.precip}% chance of rain.`)
        }
    })
};
module.exports = foreCast