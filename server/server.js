const express = require('express');
const cors = require('cors');
const app = express();

require("./config/mongoose.config")("events");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./routes/events.route")(app);

app.listen(8000, () => {
    console.log(`Listening on port 8000 for REQuests to RESpond to.`)
})