#!/usr/bin/env node --harmony

var fs      = require('fs');
var chalk   = require('chalk');

module.exports = {

    /*
     * Checks that the current folder is a root ionic project folder
     * @return {Boolean}
     */
    checkfolder : function(){
        if ( !(fs.existsSync('ionic.project')) ) {
            return false;
		}
        return true;
    },


    /*
     * Checks that entered values from a prompt are not empty
     * @return {Boolean}
     */
    validate_prompt : function(values){
        for (i = 0; i < values.length; ++i) {
            if (values[i].length == 0) {
                return false;
            }
        }
        return true;
    },

    /*
     * Print error messages
     * @return {Boolean}
     */
    print_error : function(msg){
        console.log(chalk.bgRed(chalk.white('\n'+ msg +'\n')));
        return true;
    },


    /*
     * Print success message
     * @return {Boolean}
     */
    print_success : function(msg){
        console.log(chalk.bgGreen(chalk.black.bold('\n'+ msg +'\n')));
        return true;
    },



    /*
     * Checks that the lib folder exists on the ionic project or creates it
     * @return {Boolean}
     */
    check_or_create_lib_folder : function(){
        if (!fs.existsSync(process.cwd() + '/www/lib/drupal-ionic')){
            fs.mkdirSync(process.cwd() + '/www/lib/drupal-ionic');
        }
        return true;
    }

}
