
var mongoose = require('mongoose');

module.exports = mongoose.model('agentbuddy', {
    text: {
        type: String,
        default: ''
    }
});