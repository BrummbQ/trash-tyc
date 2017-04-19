var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var trashStoreSchema = new Schema({
    name: String,
    size: Number,
    cost: Number
});

var trashStore = mongoose.model('trashStore', trashStoreSchema);

module.exports = trashStore;