const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apps-node', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(db => console.log('DB conectada'))
.catch(err => console.log(err));