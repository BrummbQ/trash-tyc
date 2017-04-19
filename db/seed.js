var trashStore = require('../models/trashStore');
var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.dbConnectionString());

// clear collections
trashStore.remove({}, function(err) {
	if (err) console.log("Error clearing database!");
});

// seed database
var trashStores = [
	{
       name: 'easy',
       size: 10,
       cost: 1
	},
	{
       name: 'medium',
       size: 20,
       cost: 1.5
	},
	{
       name: 'hard',
       size: 40,
       cost: 2
	}
];

trashStore.collection.insert(trashStores, function(err, results) {
	if (err) {
		console.log("Database Seed failed!");
	} else {
		console.log("Database seeded!");
	}
});

mongoose.disconnect();