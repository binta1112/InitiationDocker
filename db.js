const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo_db:27017/flickerImageDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connecté à MongoDB"))
.catch(err => console.error(" Erreur de connexion à MongoDB", err));

module.exports = mongoose;
