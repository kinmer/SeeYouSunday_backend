require("dotenv").config();
require('./config/db.connection.js')

const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const clubsRouter = require('./routes/clubs')
const membersRouter = require('./routes/members.js')
const eventsRouter = require('./routes/events.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json()); 
app.use(cors()); 
app.use(morgan("dev")); 
app.use('/clubs', eventsRouter)
app.use('/clubs', clubsRouter)
app.use('/members', membersRouter)

 
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
