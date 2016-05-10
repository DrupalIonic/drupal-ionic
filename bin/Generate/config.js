#!/usr/bin/env node --harmony

var ejs             = require('ejs');
var fs              = require('fs');
var chalk           = require('chalk');
var HelperUtil      = require('../Util/helper');
var str             = fs.readFileSync(__dirname + '/../Templates/config.ejs', 'utf8');

module.exports = {

    generate : function(drupal_base_url, services_endpoint){
        var config_file = ejs.render(str,
            {
                'drupal_base_url'   : drupal_base_url,
                'services_endpoint' : services_endpoint
            }
        );

        HelperUtil.check_or_create_lib_folder();

        fs.writeFile(process.cwd() + '/www/lib/drupal-ionic/config.js', config_file, function(err){
            if (err) throw err;
            HelperUtil.print_success('Configuration file has been successfully created at ' +
                chalk.underline.italic.blue('www/lib/drupal-ionic/config.js'));
            process.exit(0);
        });

    }
}
