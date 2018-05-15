const kafka = require('kafka-node');
const Producer = kafka.Producer;
const HLProducer = kafka.HighLevelProducer;
const KeyedMessage = kafka.KeyedMessage;
const Client = kafka.Client;

let client = new Client('zookeeper:2181');
let producer = new Producer(client);
producer.on('ready', function () {
  producer.createTopics(['topic1'], false, function (err, data) {
    console.log("Create Topics", data);
    console.error(err);
    console.log(data);
  });
});

module.exports = class DataCenter {
  constructor() {
    this.topic = "topic1";
    this.producer = new HLProducer(client);
    this.rets = 0;
  }

  send(car) {
    var message = new Date().toString();
    console.log("Send Message:", message);
    this.producer.send([{topic: this.topic, messages: [message]}], function (err, data) {
      if (err) {
        console.log(err);
      }
      else {
        console.log('send %d messages', ++this.rets);
      }
    });
  }
};
