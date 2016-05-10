#!/usr/bin/env node --harmony

var chalk = require('chalk');
var Helper = require('./helper');

module.exports = {

    /*
     * Gives a welcome to the user if the current folder is an ionic folder
     * @return {Boolean}
     */
    welcome : function(){

        if(Helper.checkfolder()){
            console.log(chalk.bgBlue.bold(chalk.white('\n  ---------------------------------------------  ')));
            console.log(chalk.bgBlue.bold(chalk.white('      Welcome to the Drupal Ionic generator      ')));
            console.log(chalk.bgBlue.bold(chalk.white('  ---------------------------------------------  ')));
            return true;
        }else{
            Helper.print_error('Looks like this is not an Ionic application. You need to be at the root of an Ionic project (where the ' + chalk.underline.bold('ionic.project')+' file is) to execute this command.');
            process.exit(1);
            return false;
        }
    }
}
