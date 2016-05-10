#!/usr/bin/env node --harmony

var fs 		= require('fs');
var chalk 	= require('chalk');
var co 		= require('co');
var prompt 	= require('co-prompt');
var program = require('commander');
var data	= require('../package.json');

program
	.version(data.version)
	.description('Build RESTful-ready hybrid mobile apps that connect to your Drupal services')
	.command('config', 'Generate configuration file with your Drupal service endpoints')
	.parse(process.argv);
