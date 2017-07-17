'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.205d4a49-6d8a-492e-95a2-142b1d0c4b74";

var SKILL_NAME = "American Cancer Facts";
var GET_FACT_MESSAGE = "Fact: ";
var HELP_MESSAGE = "You can say tell me a cancer fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Direct medical costs for cancer in the U S in two thousand thirteen alone, reached seventy four point eight billion dollars.",
    "People with lower socioeconomic status have higher cancer death rates regardless race or ethnicity.",
    "Alcohol consumption is a risk factor for cancers of the mouth, pharynx, larynx, esophagus, liver, colorectum, female breast, and possibly pancreas.",
    "Living a physically active lifestyle helps reduce the risk of a variety of cancer types, as well as heart disease, diabetes, and many other diseases.",
    "Overweight and obesity are clearly associated with increased risk for developing many cancers.",
    "Adults who follow healthy lifestyle recommendations are thirty six percent less likely to be diagnosed with cancer.",
    "Adults who follow healthy lifestyle recommendations are forty percent less likely to die from cancer.",
    "Smoking cessation reduces the risk of lung and other cancers caused by smoking.",
    "New cancer cases in twenty seventeen in the U S is estimated to reach one million, six hundred eighty eight thousand.",
    "Cancer deaths in twenty seventeen in the U S is estimated to reach six hundred thousand nine hundred twenty.",
    "Expect about four thousand six hundred thirty new cancer cases to open each day in the U S in twenty seventeen.",
    "About one thousand six hundred fifty people will die from cancer each day in the U S in twenty seventeen.",
    "The top three incidence rates of cancer in the U S from two thousand nine to two thousand thirteen include female breasts at the top, followed by prostate, followed by lung.",
    "The top three cancer causing deaths in the U S from two thousand ten to two thousand fourteen include lung at the top, followed by female breasts, followed by prostate."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};