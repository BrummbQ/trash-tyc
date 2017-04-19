var config = require('./config');

module.exports = {
    
    dbConnectionString: function() {
        return `mongodb://${config.db_user}:${config.db_password}@${config.db_host}:37540/${config.db_database}`;
    }
    
}