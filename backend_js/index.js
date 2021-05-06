const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json({extended:true}));
app.use('/api/', require('./routes/cars'));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const CONNECTION_URL = 'mongodb+srv://carlos_israel:carlos_israel123@cluster0.xdxr5.mongodb.net/xcaret?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Connect ${PORT}`)))
        .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);

