const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnfiedTopology', true);

mongoose.connect(URI).then(() => console.log('DB is connected')).catch(err => console.log(err));