var util = require("../lib/util")
Array.prototype.randomElement = function () {
  if (this.length === 0) {
    undefined;
  } else if (this.length === 1) {
    this[0];
  }
  return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.first = function () {
  if (this.length === 0) {
    undefined;
  } else {
    this[0];
  }
};

const messages = {
  "batman": "I'm batman!!",
  "@satire": "@sarif thinks your autocorrect is bad and you should feel bad.",
  "should I": ["Yes!!!", "Ugh, no!", "Absolutely!", "Please No!"],
  "lunch": [
    ":taco:",
    ":hotdog:",
    ":pizza:",
    ":burrito:",
    ":ramen:",
    ":hamburger:",
    ":curry:",
    ":sushi:",
    ":fried_shrimp:",
    ":bento:",
    ":egg:",
    ":spaghetti:",
    ":poultry_leg:"
  ],
  "i need help": "https://media.giphy.com/media/phJ6eMRFYI6CQ/giphy.gif",
  "weather": "https://i.imgur.com/PCWqrYG.gif",
  "reference": "https://i.imgur.com/XS5LK.gif",
  "this is fine": "https://media.giphy.com/media/NTur7XlVDUdqM/giphy.gif",
  "back\\sto\\swork": "https://i.imgur.com/gajx18c.gif",
  "options": [
    "https://media.giphy.com/media/K7QDQeUgrIyFW/giphy.gif",
    "https://media.giphy.com/media/xUA7aUNw61j9Vdzs0U/giphy.gif"
  ],
  "fabulous": [
    "https://media.giphy.com/media/YtSvlXwlmcBPO/giphy.gif",
    "https://media.giphy.com/media/5Bvu84OEog45W/giphy.gif"
  ],
  "forget\\sit": "https://i.imgur.com/4mOD1FF.gif",
  "popcorn": [
    "https://i.imgur.com/kGhIjsP.gif",
    "https://i.imgur.com/0hQyd5L.gif"
  ],
  "don'?t\\sread": "https://media.giphy.com/media/eJQjSeWZucRwbXe4ZD/giphy.gif",
  "oh\\sno": "https://i.imgur.com/pzu87Mv.gif",
  "lights": "http://dongeronimopodcast.com/wp-content/uploads/2016/12/4lights.png"
};

const random = (values) => (msg) => util.reply(msg, Array.isArray(values) ? values.randomElement() : values);

module.exports = (robot) => {
  Object.keys(messages).forEach((messageKey) => {
    robot.hear(new RegExp(`(?:^|[^\\w\\/\\\\_])${messageKey}(?:[^\\w\\/\\\\_]|$)`, "i"), random(messages[messageKey]));
  });

  robot.router.get("/", (req, res) => {
    res.send("I am Jarvis, Hello!");
  });
};
