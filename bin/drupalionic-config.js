/*
 * Generates configuration file for your Ionic app
 */

'use strict';

var chalk 	        = require('chalk');
var co 		        = require('co');
var prompt 	        = require('co-prompt');
var MessageUtil     = require('./Util/message');
var HelperUtil      = require('./Util/helper');
var GenerateConfig = require('./Generate/config');

/*
 * Shows welcome message if you are on an ionic project folder
 */
MessageUtil.welcome();

co(function *() {

    //Ask the user for the configuration variables
    var drupal_base_url     = yield prompt(chalk.bgWhite(chalk.blue('\nWhat is your Drupal base URL (e.g http://midrupalsite.com) ')));
    var services_endpoint   = yield prompt(chalk.bgWhite(chalk.blue('What is your Services Endpoint (e.g api): ')));

    //We validate the are not empty
    if(!HelperUtil.validate_prompt([drupal_base_url,services_endpoint])){
        HelperUtil.print_error("The values can't be empty");
        process.exit(1);
    }

    GenerateConfig.generate(drupal_base_url, services_endpoint);

});