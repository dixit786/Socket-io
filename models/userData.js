var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    senderName : String,
    message : String,
    receiverName : String,
    socketId : { type : Array , "default" : [] }
   
});

module.exports = mongoose.model('chatsystem', userSchema);