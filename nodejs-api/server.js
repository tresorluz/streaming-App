'use strict'

const request = require('request');
const argv = require('yargs').argv;
const secret = require('./config')

let apiKey = secret.key;
let city = argv.c || 'cape town';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});