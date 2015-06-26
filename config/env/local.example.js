'use strict';

var dotenv = require('dotenv').load();

// Rename this file to local.js for having a local configuration variables that
// will not get commited and pushed to remote repositories.
// Use it for your API keys, passwords, etc.

/* For example:

module.exports = {
	db: {
		uri: 'mongodb://localhost/local-dev',
		options: {
			user: '',
			pass: ''
		}
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: '/auth/facebook/callback'
	}
};
*/


module.exports = {
	db: {
		uri: process.env.MONGODB || 'mongodb://localhost:27017/localdb',
		options: {
			user: '',
			pass: ''
		}
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: '/auth/facebook/callback'
	}
};
