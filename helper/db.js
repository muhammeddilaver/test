const mongoose = require('mongoose');

module.exports = () => {
    mongoose.set('strictQuery', true);

    mongoose.connect('mongodb+srv://mdilaver:Mdilaver@cluster0.paejqyf.mongodb.net/?retryWrites=true&w=majority');
    
    mongoose.connection.on('open', () => {
        console.log('MongoDB connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB error: ' + err);
    });

};