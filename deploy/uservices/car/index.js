const {send} = require('micro');
const {URL, URLSearchParams} = require('url');
const fetchJson = require('node-fetch-json');
let config = require('./config');
const Car = require('./Car');
const DataCenter = require('./DataCenter');


// Registr back with the fleet. Fleet URL should be via configuration file.
// Put in a loop to Wait for a request.
//    dataCenter=URL // URL of the DataCenter to stream telemetry too.
//    settings=json // JSON of new settings for the car
// Every X seconds (frequency) send data to the dataCenter.
// Settings JSON
//   frequency: 60 // frequency to send stream data
//   accidents: 0.001  // Probability of an accident
//
// Steamed Data JSON
//  vin:
//  longitude:
//  latitude:
//  velocity:
//  accident: true | false
//  outside_tempature:
//  inside_tempature:
//

// In 60 seconds generate and Send the Data
// Generate Data
// Send data to the DataCenter
const kafka = require('kafka-node');
const Producer = kafka.Producer;
const HLProducer = kafka.HighLevelProducer;
const KeyedMessage = kafka.KeyedMessage;
const Client = kafka.Client;

// let client = new Client('10.0.75.1:2181');
let client = new Client('10.0.75.1:2181');
let producer = new Producer(client);
producer.on('ready', function () {
  console.log("Broker Ready!!!!!");
  producer.createTopics(['topic1'], false, function (err, data) {
    console.log("Create Topics", data);
    console.error(err);
    console.log(data);
  });
});


async function simulateCar(car, dc) {
  car.generateData();
  // Set timeout to run generate and send in <fequency> seconds
  setTimeout(function () {
    car.generateData();
    dc.send(car);
    // Call simulateCar again to trigger.
    simulateCar(car);
  }, config.car.frequency * 1000);
};

// Create a car
let car = new Car();
let dc = new DataCenter();
// simulateCar(car,dc);

module.exports = async function (req, res) {
  const url = "http://" + req.headers.host + req.url;
  const myURL = new URL(url);
  const newSearchParams = new URLSearchParams(myURL.searchParams);
  const id = newSearchParams.get("id");
  const callback = newSearchParams.get("callback");

  if (callback) {
    console.log("Callback:", callback);
    const response = await fetch(callback);
    const json = await response.text();
    console.log(json);
  }
  send(res, 200, 'Got it');
};
