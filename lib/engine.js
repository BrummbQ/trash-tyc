var trashStore = require('../models/trashStore');
var math = require('mathjs');

module.exports = {
	generateEvents: function(response) {
		trashStore.find().lean().exec((error, trash) => {
			if (error) return response.status(500).send("Error fetching db");
			let cashIncome = 0;

			// generate random trash for each category
			trash.forEach((item) => {
				item.count = math.randomInt(0, 10);
				cashIncome += item.count;
			});

			response.send({
				trash: trash,
				cashIncome: cashIncome
			});
		})
	}
}