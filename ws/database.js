const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

mongoose
.connect(process.env.MONGO_DEV_URI, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));