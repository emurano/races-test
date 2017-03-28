var http = require('http');

var randomRaceType = function() {
    var types = [ 'R', 'H', 'G' ];
    var randomIndex = randomNumber(0, types.length - 1);
    return types[randomIndex];
};

var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
};

var randomDate = function (min, max) {
    var currentDate = new Date();
    return new Date(currentDate.getTime() + ( Math.floor(Math.random() * (max - min + 1)) + min - (max / 2)));
};

var randomRaceName = function() {
    var words = [
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

    var wordList = [];
    var numWords = randomNumber(1, 5);
    for (var i = 0; i < numWords; i++) {
        var randomIndex = randomNumber(0, words.length - 1);
        wordList.push(words[randomIndex]);
    }
    return wordList.join(' ');
}

var randomLocation = function() {
    var locations = [ 'GBR', 'FRA', 'ZAF' ];
    var randomIndex = randomNumber(0, locations.length - 1);
    return locations[randomIndex];
};

var generateRandomRace = function() {


    var raceDate = randomDate(1, 1000000);
    var race = {
        "raceStartTime": raceDate.toISOString(), // "2017-03-28T13:50:00.000Z",
        "raceNumber": randomNumber(1, 20),
        "raceName": randomRaceName(),
        // "raceDistance": 1800,
        // "broadcastChannel": "Sky Racing 1",
        // "broadcastChannels": [
        //     "Sky Racing 1"
        // ],
        "meeting": {
            "raceType": randomRaceType(),
            // "meetingName": "WOLVERHAMPTON",
            "location": randomLocation(),
            // "weatherCondition": "OCAST",
            // "trackCondition": "AWT",
            // "railPosition": "True",
            // "venueMnemonic": "WOL",
            // "meetingDate": "2017-03-28"
        }
    };

    return race;
};

var server = http.createServer(function(req, res) {
    //res.writeHead(200);
    res.setHeader('Access-Control-Allow-Origin', '*');


    var data = { races: [] };

    for (var i = 0; i < 100; i++) {
        data.races.push(generateRandomRace());
    }

    res.end(JSON.stringify(data));
});
server.listen(8081);