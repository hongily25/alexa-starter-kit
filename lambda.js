'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;

const handlers = {
    'LaunchRequest': function () {
        const welcomeMsg = "Welcome.";
        const reprompt = "I didn't get that. Can you repeat that?";
        const cardTitle = "My Skill Name";
        const cardBody = "Sample Output for Card Body";
        this.emit(':askWithCard', welcomeMsg, reprompt, cardTitle, cardBody);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = "How can I help you?";
        this.emit(':ask', speechOutput, speechOutput);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Ok. Goodbye.');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Ok. Goodbye.');
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
