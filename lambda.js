/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const handlers = {
    'LaunchRequest': function () {
        const welcomeMsg = "Welcome to Have You Ever. Say give me a question to start the game or stop to stop the game.";
        this.emit(':askWithCard', welcomeMsg, this.t('HELP_REPROMPT'), this.t('SKILL_NAME'), '... ');
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
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
