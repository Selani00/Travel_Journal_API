const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/Travel_journal').on('open',()=>{
    console.log('connected to mongo');
}).on('error',()=>{
    console.log(`error connecting to mongo. ${error}`);
});

module.exports = connection;