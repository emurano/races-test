var http = require('http');

var randomRaceType = function() {
    let types = [ 'R', 'H', 'G' ];
    let randomIndex = randomNumber(0, types.length - 1);
    return types[randomIndex];
};

var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
};

var randomDate = function (min, max) {
    let currentDate = new Date();
    return new Date(currentDate.getTime() + ( Math.floor(Math.random() * (max - min + 1)) + min));
};

var randomRaceName = function() {
    let words = [
        'GRANDNATIONAL',
        '2017',
        'HANDICAP HURDLE',
        'PRIX SAUVONS',
        'LE CHEVAL',
        'NOS EMPLOIS',
        'TAB',
        'HANDICAP',
        'CRAYFORD',
        'BETWAY', 'HANDICAP',
        'PRIX DE SUCE', 'GRB HURDLE',
        'SUPER LEAGUE', 'HANDICAP CHASE',
        'CRAYFORD', 'SOUTHWELL',
        'MARSEILLE', 'VIVAUX',
        'WOLVERHAMPTON',
        'CRAYFORD',
        'HEXHAM'
    ];

    let wordList = [];
    let numWords = randomNumber(1, 5);
    for (var i = 0; i < numWords; i++) {
        let randomIndex = randomNumber(0, words.length - 1);
        wordList.push(words[randomIndex]);
    }
    return wordList.join(' ');
}

var randomLocation = function() {
    let locations = [ 'GBR', 'FRA', 'ZAF' ];
    let randomIndex = randomNumber(0, locations.length - 1);
    return locations[randomIndex];
};

var generateRandomRace = function() {


    let raceDate = randomDate(1, 1000000);
    let race = {
        "raceStartTime": raceDate.toISOString(), // "2017-03-28T13:50:00.000Z",
        "raceNumber": randomNumber(1, 20),
        "raceName": randomRaceName(),
        "raceDistance": 1800,
        "broadcastChannel": "Sky Racing 1",
        "broadcastChannels": [
            "Sky Racing 1"
        ],
        "meeting": {
            "raceType": randomRaceType(),
            "meetingName": "WOLVERHAMPTON",
            "location": randomLocation(),
            "weatherCondition": "OCAST",
            "trackCondition": "AWT",
            "railPosition": "True",
            "venueMnemonic": "WOL",
            "meetingDate": "2017-03-28"
        }
    };

    return race;
};

var server = http.createServer(function(req, res) {
    //res.writeHead(200);
    res.setHeader('Access-Control-Allow-Origin', '*');


    let data = { races: [] };

    for (var i = 0; i < 100; i++) {
        data.races.push(generateRandomRace());
    }

    res.end(JSON.stringify(data));
});
server.listen(8081);